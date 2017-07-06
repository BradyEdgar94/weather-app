export default {
    container: {
        backgroundColor: '#fff',
        borderBottom: 'solid 1px #c9c9c9',
        listStyleType: 'none',
        position: 'relative',
        '&:before': {
            content: '""',
            zIndex: 0,
            position: 'absolute',
            left: 0,
            top: 0,
            width: 0,
            height: '100%',
            background: '#5783c1',
            transition: 'width 0.3s ease-in-out',
        },
        '&:hover': {
            '&:before': {
                width: '0.75rem'
            },
            '& button': {
                paddingLeft: '6rem'
            },
            '& img': {
                left: '2rem'
            }
        },
        '& p': {
            position: 'relative',
            fontWeight: 600,
            fontSize: '1.35rem',
            textAlign: 'left',
            '& span': {
                fontSize: '0.85rem',
                fontWight: 200,
                display: 'block',
                marginTop: '0.5rem'
            }
        },
        '& button': {
            zIndex: 2,
            position: 'relative',
            padding: '2rem 1rem 2rem 5rem',
            background: 'none',
            width: '100%',
            color: '#5783c1',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            transition: 'color 0.3s ease-in-out, padding-left 0.3s ease-in-out',
        }
    },
    delete: {
        display: 'block',
        position: 'absolute',
        right: '1rem',
        top: '50%',
        marginTop: '-0.75rem',
        width: '1.5rem',
        height: '1.5rem',
        transition: 'transform 0.3s ease-in-out',
        '& img': {
            width: '100%'
        },
        '&:hover': {
            transform: 'rotate(90deg)'
        }
    },
    icon: {
        display: 'block',
        position: 'absolute',
        left: '1rem',
        top: '50%',
        marginTop: '-1.5rem',
        marginRight: '1rem',
        width: '3rem',
        height: '3rem',
        transition: 'left 0.3s ease-in-out',
    },
    active: {
        borderBottom: 'none',
        '& button': {
            background: '#8fadd6',
            color: '#fff',
            paddingLeft: '5rem !important'
        },
        '& img': {
            left: '1rem !important'
        }
    }
}
