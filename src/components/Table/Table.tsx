import React from 'react'
import { Card, IndexTable , TextStyle, useIndexResourceState} from '@shopify/polaris'; 

//import components
import Pagination from '../Pagination/Pagination';

//import types
import { Itable } from './type';

//import PropTypes
import PropTypes from 'prop-types'; 

 
function Table({ 
         onchangePage, 
         onChangeRow,  
         paginationData, 
         data, 
         loading}: Itable): JSX.Element {
    const resourceName = {
       singular: 'Passenger',
       plural: 'Passengers'
     };
                                
    const {
        selectedResources,
        allResourcesSelected,
        handleSelectionChange
    } = useIndexResourceState(data);

   const rowMarkup = (data || []).map(({ _id, name, trips }, index) => 
   <IndexTable.Row 
      id={_id}
      key={_id} 
      selected={selectedResources.includes(_id)} 
      position={index}>
    <IndexTable.Cell>
         <TextStyle >{_id}</TextStyle>
   </IndexTable.Cell>
    <IndexTable.Cell>
    <TextStyle >{name}</TextStyle>
         </IndexTable.Cell>
    <IndexTable.Cell>
    <TextStyle >{trips}</TextStyle>
   </IndexTable.Cell>
   <IndexTable.Cell>
         <TextStyle variation="strong" >{
         new Intl.NumberFormat('de-DE', 
         { style: 'currency', currency: 'EUR' }
         ).format(parseInt(trips) * 199)
         }
    </TextStyle>
    </IndexTable.Cell>
    </IndexTable.Row>);
 
  return (
        <div className="app-card-margin">
 
  <Card title="All Passengers" sectioned>
        <IndexTable 
          resourceName={resourceName} 
          itemCount={(data || []).length} 
          selectedItemsCount={allResourcesSelected ? 'All' : selectedResources.length} 
          onSelectionChange={handleSelectionChange}
          headings={[
            { title: 'ID' },
            { title: 'Name' },
            { title: 'Trips' },
            { title: 'Total amount paid for flights' }
        ] } 
          condensed={false} 
          hasMoreItems={true} 
          loading={loading}>
          {rowMarkup}
        </IndexTable>  

      <div className="app-table-pagination">
      <Pagination 
            onchangePage={onchangePage}
            onChangeRow={onChangeRow}
            totalPage={paginationData.totalPage} 
            row={paginationData.row} 
            currentPage={paginationData.currentPage} 
       />
      </div>
        </Card> 
      </div>
    )
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  headerTable: PropTypes.array.isRequired,
  paginationData: PropTypes.object.isRequired,
  onchangePage:  PropTypes.func.isRequired,
  onChangeRow:  PropTypes.func.isRequired,
};

export default Table