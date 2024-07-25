import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function ProfileAvatar() {
  return (
    <Avatar>
      <AvatarImage alt="@KeneePatel" width={36} height={36} />
      <AvatarFallback>KP</AvatarFallback>
    </Avatar>
  );
}
