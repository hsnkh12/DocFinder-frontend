import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';



function SearchBar(props){


    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'white',
        marginRight: theme.spacing(2),
        width: '100%',
        borderRadius: 17,
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 400,
          borderRadius: 17,
        },
      }));

      const SearchIconWrapper = styled('button')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border:'none',
      }));

      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(2, 0, 2, 0),
          // vertical padding + font size from searchIcon
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: 300,
          },
        },
      }));

    return (
        <div style={{display:'flex', alignItems: 'center', justifyContent: 'center',}}>
        <Search >
            <SearchIconWrapper type='submit' style={{color:'black', backgroundColor:'white', borderRadius: 17}}>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="search by name"
              inputProps={{ 'aria-label': 'search' }}
              name="name"
            />
          </Search>
        </div>
    )
}

export default SearchBar