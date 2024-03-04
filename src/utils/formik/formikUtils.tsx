/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField, TextFieldProps } from "@mui/material";
import { startCase } from "lodash";
import * as Yup from "yup";
import React from "react";

export type FormikSchema = Record<
  string,
  {
    type: string;
    required: boolean;
    initialValue: any;
    validator?: any;
    label?: string;
  }
>;

export const getDefaultFormValues = (
  schema: FormikSchema
): Record<string, any> => {
  return Object.keys(schema).reduce((acc, cur) => {
    acc[cur] = schema[cur].initialValue;
    return acc;
  }, {} as Record<string, any>);
};

export const getValidationSchema = (schema: FormikSchema) => {
  return Yup.object(
    Object.keys(schema).reduce((acc, cur) => {
      const schemaValue = schema[cur];
      if (schemaValue && "validator" in schemaValue) {
        acc[cur] = schema[cur].validator;
      }
      return acc;
    }, {} as any)
  );
};

export const getSchemaProps = (
  schema: FormikSchema,
  schemaKey: string,
  formik: Record<string, any>
): Partial<TextFieldProps> => {
  const schemaValue = schema[schemaKey];
  return {
    value: formik.values[schemaKey],
    onChange: (e) => {
      formik.setFieldValue(
        schemaKey,
        schemaValue.type === "number" ? Number(e.target.value) : e.target.value
      );
    },
    label:
      schemaValue.label ||
      (schemaValue.required
        ? `${startCase(schemaKey)}*`
        : startCase(schemaKey)),
    fullWidth: true,
    error: !!formik.errors[schemaKey],
    helperText: formik.errors[schemaKey] || "",
    onFocus: (e) => e.target.select()
  };
};

export interface GenericTextFieldProps {
  schemaKey: string;
  formik: Record<string, any>;
  formikSchema: FormikSchema;
}

export default function GenericTextField(
  props: GenericTextFieldProps & TextFieldProps
) {
  const { formikSchema, schemaKey, formik, ...rest } = props;
  const textFiledProps = getSchemaProps(formikSchema, schemaKey, formik);
  return <TextField {...textFiledProps} {...rest} />;
}
