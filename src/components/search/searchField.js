import { Grid } from "@mui/material"
import SearchBar from "./searchBar"


function SearchField(){


    return (
        <>
          <br></br>
          <br></br>
          <p style={{fontSize:26, color:'#e0e0e0', marginBottom:12}}>Search for a doctor</p>
            <SearchBar />
        </>
    )
}

export default SearchField