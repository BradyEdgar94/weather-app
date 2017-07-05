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
                width: '100%'
            },
            '& button': {
                color: '#fff'
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
            transition: 'color 0.3s ease-in-out',
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
        height: '3rem'
    },
    active: {
        borderBottom: 'none',
        '& button': {
            background: '#5783c1',
            color: '#fff'
        }
    }
}
