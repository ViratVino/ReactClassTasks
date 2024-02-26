import { Avatar,AvatarGroup,Stack } from "@mui/material";
const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
        <Stack direction={"row"} spacing={1}>
         <Avatar sx={{bgcolor:"primary.light"}}>VK</Avatar>
         <Avatar sx={{bgcolor:"secondary.light"}}>NP</Avatar>

        </Stack>

        <Stack direction={"row"} spacing={1}>
            <AvatarGroup>
        <Avatar sx={{bgcolor:"primary.light"}}>VK</Avatar>
         <Avatar sx={{bgcolor:"secondary.light"}}>NP</Avatar>
         <Avatar src="https://media.istockphoto.com/id/1443543154/photo/smiling-mature-woman-standing-in-a-park-outdoors-in-the-summertime.jpg?s=1024x1024&w=is&k=20&c=jJcScATuz8RaAO8L1CZEGXQ5Z4VvaaIzARMeyn4fRZo=" sx={{bgcolor:"primary.light"}}></Avatar>
         <Avatar src="https://cdn.pixabay.com/photo/2016/06/11/12/15/females-1450050_640.jpg" sx={{bgcolor:"secondary.light"}}></Avatar>
         </AvatarGroup>
        </Stack>
        <Stack direction={"row"} spacing={1}>
         <Avatar variant="rounded" sx={{bgcolor:"primary.light"}}>VK</Avatar>
         <Avatar sx={{bgcolor:"secondary.light"}}>NP</Avatar>

        </Stack>
    </Stack>
  )
}

export default MuiAvatar