import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    ButtonBase,
    Divider,
    Drawer,
    Grid,
    IconButton,
    InputAdornment,
    Menu,
    MenuItem,
    Stack,
    TextField,
    Typography,
    useMediaQuery
} from '@mui/material';

// third party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import SortOptions from './SortOptions';
import ProductEmpty from './ProductEmpty';
import ProductFilter from './ProductFilter';
import ProductFilterView from './ProductFilterView';
import ProductCard from 'ui-component/cards/ProductCard';
import FloatingCart from 'ui-component/cards/FloatingCart';
import SkeletonProductPlaceholder from 'ui-component/cards/Skeleton/ProductPlaceholder';
//import axios from 'utils/axios';
import axios from 'axios';

import { SET_MENU, RESET_CART } from 'store/actions';
import { appDrawerWidth, gridSpacing } from 'store/constant';

// assets
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

// product list container
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -appDrawerWidth,
    [theme.breakpoints.down('xl')]: {
        paddingRight: 0,
        marginRight: 0
    },
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginRight: 0
    })
}));

// ==============================|| E-COMMERCE - PRODUCT GRID ||============================== //

const Products = () => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const customization = useSelector((state) => state.customization);
    const cart = useSelector((state) => state.cart);

    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
    const matchDownLG = useMediaQuery(theme.breakpoints.down('xl'));

    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    // drawer
    const [open, setOpen] = useState(isLoading);

    const handleDrawerOpen = () => {
        setOpen((prevState) => !prevState);
    };

    // product data
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const response = await axios.get('/products/list');
        /*const response = await axios.create({
            baseURL: 'http://127.0.0.1:8081'
        }).get('/products/list');*/
        
        setProducts(response.data);
    };

    useEffect(() => {
        getProducts();

        // hide left drawer when email app opens
        dispatch({ type: SET_MENU, opened: false });

        // clear cart if complete order
        if (cart.checkout.step > 2) {
            dispatch({ type: RESET_CART });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // filter
    const initialState = {
        search: '',
        sort: 'low',
        gender: [],
        categories: ['all'],
        colors: [],
        price: '',
        rating: 0
    };
    const [filter, setFilter] = useState(initialState);

    // search filter
    const handleSearch = async (event) => {
        const newString = event?.target.value;
        setFilter({ ...filter, search: newString });
    };

    // sort options
    const [anchorEl, setAnchorEl] = useState(null);
    const openSort = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const filterIsEqual = (a1, a2) =>
        a1 === a2 ||
        (a1.length === a2.length &&
            a1.search === a2.search &&
            a1.sort === a2.sort &&
            a1.price === a2.price &&
            a1.rating === a2.rating &&
            JSON.stringify(a1.gender) === JSON.stringify(a2.gender) &&
            JSON.stringify(a1.categories) === JSON.stringify(a2.categories) &&
            JSON.stringify(a1.colors) === JSON.stringify(a2.colors));

    const handelFilter = (type, params, rating) => {
        setLoading(true);
        switch (type) {
            case 'gender':
                if (filter.gender.some((item) => item === params)) {
                    setFilter({ ...filter, gender: filter.gender.filter((item) => item !== params) });
                } else {
                    setFilter({ ...filter, gender: [...filter.gender, params] });
                }
                break;
            case 'categories':
                if (filter.categories.some((item) => item === params)) {
                    setFilter({ ...filter, categories: filter.categories.filter((item) => item !== params) });
                } else if (filter.categories.some((item) => item === 'all') || params === 'all') {
                    setFilter({ ...filter, categories: [params] });
                } else {
                    setFilter({ ...filter, categories: [...filter.categories, params] });
                }

                break;
            case 'colors':
                if (filter.colors.some((item) => item === params)) {
                    setFilter({ ...filter, colors: filter.colors.filter((item) => item !== params) });
                } else {
                    setFilter({ ...filter, colors: [...filter.colors, params] });
                }
                break;
            case 'price':
                setFilter({ ...filter, price: params });
                break;
            case 'search':
                setFilter({ ...filter, search: params });
                break;
            case 'sort':
                setFilter({ ...filter, sort: params });
                break;
            case 'rating':
                setFilter({ ...filter, rating });
                break;
            case 'reset':
                setFilter(initialState);
                break;
            default:
            // no options
        }
    };

    const filterData = async () => {
        await axios
            .post('/api/products/filter', {
                filter
            })
            .then((res) => {
                setProducts(res.data.results);
                setLoading(false);
            });
    };

    useEffect(() => {
        filterData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter]);

    useEffect(() => {
        setOpen(!matchDownLG);
    }, [matchDownLG]);

    // sort filter
    const handleMenuItemClick = (event, index) => {
        setFilter({ ...filter, sort: index });
        setAnchorEl(null);
    };

    const sortLabel = SortOptions.filter((items) => items.value === filter.sort);

    let productResult = <></>;
    if (products) {
        productResult = products.map((product, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <ProductCard
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    description={product.description}
                    offerPrice={product.offerPrice}
                    salePrice={product.salePrice}
                    rating={product.rating}
                    color={product.colors ? product.colors[0] : undefined}
                />
            </Grid>
        ));
    }

    const spacingMD = matchDownMD ? 1 : 1.5;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Grid container alignItems="center" justifyContent="space-between" spacing={matchDownMD ? 0.5 : 2}>
                    <Grid item>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Typography variant="h4">Shop</Typography>
                            <IconButton size="large">
                                <ArrowForwardIosIcon sx={{ width: '0.875rem', height: '0.875rem', fontWeight: 500, color: 'grey.500' }} />
                            </IconButton>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Stack direction="row" alignItems="center" justifyContent="center" spacing={matchDownSM ? 0.5 : spacingMD}>
                            <TextField
                                sx={{ width: { xs: 140, md: 'auto' } }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon fontSize="small" />
                                        </InputAdornment>
                                    )
                                }}
                                value={filter.search}
                                placeholder="Search Product"
                                size="small"
                                onChange={handleSearch}
                            />

                            <Typography sx={{ pl: 1.5, fontSize: '1rem', color: 'grey.500', fontWeight: 400 }}>|</Typography>

                            <ButtonBase disableRipple onClick={handleDrawerOpen}>
                                <FilterAltIcon sx={{ fontWeight: 500, color: 'secondary.200' }} />
                                <Typography variant="h5" sx={{ mt: 0.5, display: { xs: 'none', sm: 'block' } }}>
                                    Filter
                                </Typography>
                            </ButtonBase>

                            <Typography sx={{ display: { xs: 'none', sm: 'flex' }, fontSize: '1rem', color: 'grey.500', fontWeight: 400 }}>
                                |
                            </Typography>
                            <Stack direction="row" alignItems="center" justifyContent="center" sx={{ display: { xs: 'none', sm: 'flex' } }}>
                                <Typography variant="h5">Sort by: </Typography>
                                <Button
                                    id="demo-positioned-button"
                                    aria-controls="demo-positioned-menu"
                                    aria-haspopup="true"
                                    aria-expanded={openSort ? 'true' : undefined}
                                    onClick={handleClickListItem}
                                    sx={{ color: 'grey.500', fontWeight: 400 }}
                                    endIcon={<KeyboardArrowDownIcon />}
                                >
                                    {sortLabel.length > 0 && sortLabel[0].label}
                                </Button>
                                <Menu
                                    id="demo-positioned-menu"
                                    aria-labelledby="demo-positioned-button"
                                    anchorEl={anchorEl}
                                    open={openSort}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right'
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                >
                                    {SortOptions.map((option, index) => (
                                        <MenuItem
                                            sx={{ p: 1.5 }}
                                            key={index}
                                            selected={option.value === filter.sort}
                                            onClick={(event) => handleMenuItemClick(event, option.value)}
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Divider sx={{ borderColor: 'grey.400' }} />
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ display: 'flex' }}>
                    <Main open={open}>
                        <ProductFilterView
                            filter={filter}
                            filterIsEqual={filterIsEqual}
                            handelFilter={handelFilter}
                            initialState={initialState}
                        />
                        <Grid container spacing={gridSpacing}>
                            {isLoading
                                ? [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                                      <Grid key={item} item xs={12} sm={6} md={4} lg={3}>
                                          <SkeletonProductPlaceholder />
                                      </Grid>
                                  ))
                                : productResult}
                            {products.length <= 0 && (
                                <Grid item xs={12} sx={{ mt: 3 }}>
                                    <ProductEmpty />
                                </Grid>
                            )}
                        </Grid>
                    </Main>
                    <Drawer
                        sx={{
                            ml: open ? 3 : 0,
                            height: matchDownLG ? '100vh' : 'auto',
                            flexShrink: 0,
                            zIndex: { xs: 1200, lg: open ? 0 : -1 },
                            overflowX: 'hidden',
                            width: appDrawerWidth,
                            '& .MuiDrawer-paper': {
                                height: 'auto',
                                width: appDrawerWidth,
                                position: matchDownLG ? 'fixed' : 'relative',
                                border: 'none',
                                borderRadius: matchDownLG ? 0 : `${customization.borderRadius}px`
                            }
                        }}
                        variant={matchDownLG ? 'temporary' : 'persistent'}
                        anchor="right"
                        open={open}
                        ModalProps={{ keepMounted: true }}
                        onClose={handleDrawerOpen}
                    >
                        <PerfectScrollbar component="div">
                            <ProductFilter filter={filter} handelFilter={handelFilter} />
                        </PerfectScrollbar>
                    </Drawer>
                </Box>
            </Grid>
            <FloatingCart />
        </Grid>
    );
};

export default Products;
