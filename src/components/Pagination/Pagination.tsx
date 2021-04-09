import React from 'react'
import { Select } from '@shopify/polaris'

//import types
import { Ipagination } from './type';

import PropTypes from 'prop-types'; 

//import styles
import './Pagination.scss'
 
 
 const Pagination: React.FC<Ipagination> = ({ totalPage, row, onChangeRow, currentPage, onchangePage}) => {
 
    const [navifation, setnavifation] = React.useState<Array<number>>([])

    React.useEffect(() => {
        if (currentPage !== -1) {
            let startPage: number
            let endPage: number
            if (totalPage <= 5) {
                // less than 5 total pages so show all 
                startPage = 1;
                endPage = totalPage + 1;
            } else {
                // more than 5 total pages so calculate start and end pages
                if (currentPage <= 2) {
                    startPage = 1;
                    endPage = 6;
                   
                } else if (currentPage + 3 >= totalPage) {
                    startPage = totalPage - 5;
                    endPage = totalPage + 1;
                } else {
                    startPage = currentPage - 1;
                    endPage = currentPage + 4;
                }
            } 
           
            const pages: number[] = []
            for(let i = startPage; i < endPage ; i++) {
                pages.push(i)
            } 
            setnavifation(pages)
        }
    }, [currentPage])

 


    return (
        <div className="app-section-pagination">
            <div> 
    <ul className="pagination">
        <li className={currentPage === 0 ? 'disabled' : ''}>
            <a onClick={() => onchangePage(0)}> {`<<`}</a>
        </li>
        <li className={currentPage === 0 ? 'disabled' : ''}>
            <a onClick={() => onchangePage(currentPage - 1)}> {`<`} </a>
        </li>

        {navifation.map((page, index) =>
            <li key={index} >
                <a onClick={() => onchangePage(page - 1)} className={ currentPage + 1  === page ? 'active' : ''} >{page}</a>
            </li>
        )}
        <li className={currentPage === totalPage - 1 ? 'disabled' : ''}>
            <a onClick={() => onchangePage(currentPage + 1)}> {`>`}</a>
        </li>
        <li className={currentPage === totalPage - 1 ? 'disabled' : ''}>
            <a onClick={() => onchangePage(totalPage - 1)}> {`>>`}</a>
        </li>
    </ul>
    </div>
    <div className="app-pagination-indecator" >
       Rows per page: {(parseInt(row) * currentPage + 1)}-{(parseInt(row) * currentPage) + parseInt(row)} of {totalPage}
     
    <div style={{float:'right'}}>
    <Select
        label=" "
        labelInline         
        options={[
            {label: '10', value: '10'},
            {label: '25', value: '25'},                                                                                                     
            {label: '30', value: '30'},
            {label: '50', value: '50'},
          ]}
        onChange={(value) => onChangeRow(value)}
        value={row.toString()}
      />
    </div>
    </div>
   
    </div>
    )
}

Pagination.propTypes = { 
    onchangePage: PropTypes.func.isRequired,
    onChangeRow: PropTypes.func.isRequired,
    totalPage: PropTypes.number.isRequired,
    row: PropTypes.string.isRequired,
    currentPage: PropTypes.number.isRequired,
  };
export default  Pagination