export const customStyles = {
    control: (provided: any, state: { isFocused: boolean }) => ({
        ...provided,
        border: state.isFocused ? '1px solid #00BB6D' : `1px solid #EAEAEA`,
        margin: '13px 0 25px',
        borderRadius: '7px',
        paddingLeft: '5px',
        '&:hover': {
            border: '1px solid #00BB6D',
        },
    }),
    option: (provided: any, state: { isSelected: boolean }) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#eee' : 'white',
        color: '#3A3A3A',
        '&:hover': {
            backgroundColor: '#f5f5f5',
        },
    }),
    singleValue: (provided: any) => ({
        ...provided,
        fontWeight: '400',
        color: '#3A3A3A',
        fontSize: '16px',
        lineHeight: '21px',
    }),
};