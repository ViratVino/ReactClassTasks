import { TableContainer,Table,TableBody,TableRow,TableCell,Paper, TableHead } from "@mui/material"

const MuiTable = () => {
  return (
    <TableContainer>
        <Table  stickyHeader>
          <TableHead >
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell align="center">Email</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {
                tableData.map(val=>{
                    return(
                        <TableRow key={val.id} >
                            <TableCell>{val.id}</TableCell>
                            <TableCell>{val.first_name}</TableCell>
                            <TableCell>{val.last_name}</TableCell>
                            <TableCell align="center">{val.email}</TableCell>

                        </TableRow>
                    )
                })
            }
          </TableBody>
        </Table>
    </TableContainer>
  )
}

export default MuiTable


const tableData=[{
    "id": 1,
    "first_name": "Ema",
    "last_name": "Swaisland",
    "email": "eswaisland0@ed.gov",
    "gender": "Female",
    "ip_address": "158.168.16.141"
  }, {
    "id": 2,
    "first_name": "Stephanus",
    "last_name": "Van der Son",
    "email": "svanderson1@ebay.com",
    "gender": "Polygender",
    "ip_address": "198.211.27.51"
  }, {
    "id": 3,
    "first_name": "Allayne",
    "last_name": "Raison",
    "email": "araison2@washingtonpost.com",
    "gender": "Male",
    "ip_address": "160.10.228.199"
  }, {
    "id": 4,
    "first_name": "Gracia",
    "last_name": "Garfath",
    "email": "ggarfath3@netvibes.com",
    "gender": "Female",
    "ip_address": "62.107.160.195"
  }, {
    "id": 5,
    "first_name": "Boone",
    "last_name": "Whoston",
    "email": "bwhoston4@cnn.com",
    "gender": "Male",
    "ip_address": "189.137.119.163"
  }, {
    "id": 6,
    "first_name": "Jedidiah",
    "last_name": "Lowe",
    "email": "jlowe5@godaddy.com",
    "gender": "Male",
    "ip_address": "175.195.227.119"
  }, {
    "id": 7,
    "first_name": "Wain",
    "last_name": "Ashton",
    "email": "washton6@51.la",
    "gender": "Male",
    "ip_address": "5.191.254.154"
  }, {
    "id": 8,
    "first_name": "Shelley",
    "last_name": "Ellerby",
    "email": "sellerby7@netlog.com",
    "gender": "Female",
    "ip_address": "231.118.253.119"
  }, {
    "id": 9,
    "first_name": "Abner",
    "last_name": "Bore",
    "email": "abore8@example.com",
    "gender": "Male",
    "ip_address": "125.182.229.40"
  }, {
    "id": 10,
    "first_name": "Tymon",
    "last_name": "Filisov",
    "email": "tfilisov9@prlog.org",
    "gender": "Male",
    "ip_address": "182.158.57.60"
  }
]