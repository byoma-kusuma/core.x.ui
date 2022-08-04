export default function createAvatar(avatar: string | undefined | null) {
  return (
    avatar ||
    `https://avatars.dicebear.com/api/avataaars/${Math.random() * 100000}.svg`
  );
}
