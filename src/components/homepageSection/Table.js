// DEPENDENCIES
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable,{createTheme} from "react-data-table-component";
import {listCrypto} from '../../action/cryptoAction';

// STYLES
import styled from "styled-components"

function Table() {
    // GET DATA
    const dispatch = useDispatch()

    const cryptoList = useSelector(state => state.cryptoList)
    const {loading, crypto, error} = cryptoList
    
    useEffect(() => {
        // get all crypto
        dispatch(listCrypto)
    },[dispatch])

    // DATATABLE THEME
    createTheme('tableTheme', {
        text: {
            primary: '#010101',
            secondary: '#707070',
        },
        background: {
            default: '#E9E9E9',
        },
        context: {
            background: '#cb4b16',
            text: '#FFFFFF',
        },
        divider: {
            default: '#F6F8FC',
        },
        action: {
            button: 'rgba(0,0,0,.54)',
            hover: 'rgba(0,0,0,.08)',
            disabled: 'rgba(0,0,0,.12)',
        },
    });

    // DATATABLE COLUMNS DECLARATION
    const columns = [
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Price',
            selector: 'price',
            sortable: true,
            right: true,
        },
        {
            name: '24H%',
            selector: 'inaDay',
            sortable: true,
            right: true,
        },
        {
            name: '7D%',
            selector: 'inaWeek',
            sortable: true,
            right: true,
        },
        {
            name: 'Market Cap',
            selector: 'marketCap',
            sortable: true,
            right: true,
        },
        {
            name: 'Volume',
            selector: 'volume',
            sortable: true,
            right: true,
        },
        {
            name: 'Last 7 Days',
            selector: 'lastWeek',
            sortable: true,
            right: true,
        },
    ];

    // DATATABLE DATA
    const data = [
        { 
            id: 1, 
            name: 'BitCoin', 
            price: '$33,658.79',
            inaDay: '1.32%',
            inaWeek: '3.51%',
            marketCap: '$629,292,749,955',
            volume: '$25,827,359,389',
            lastWeek: 'line-chart',
        },
    ];

    return (
        <Tables>
            <DataTable 
                columns={columns}
                theme="tableTheme"
                data={data}
            />
        </Tables>
    )
}

export default Table

const Tables = styled.div`
    position: relative;
    width: 100%;
    height: auto;
`;