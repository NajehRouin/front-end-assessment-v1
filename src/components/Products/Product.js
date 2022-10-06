import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {Card, CardText, CardBody, CardTitle, ListGroup, ListGroupItem, Button} from 'reactstrap';
import moment from 'moment'
import {Link} from "react-router-dom";

const shortDateFormat = 'MM/DD/YYYY';
const longDateFormat = 'MM/DD/YYYY hh:mm a';


const Product = ({ product, onDelete }) => {


  const [select,setSelect]=useState(false);

  useEffect(() => {  
    
    const getDate=async()=>{
      var  dt=new Date();
      var date=(dt.getMonth() + 1)+"/"+dt.getDate() + "/" +dt.getFullYear()   ;
          var  dt2=new Date(date);

  
      var dt3=new Date(product.expirationDate);
      var date2=(dt3.getMonth() + 1) + "/"+dt3.getDate()+"/" + dt3.getFullYear() ;
      var dt4=new Date(date2);
  
  
     var Difference_In_Time = dt4.getTime() - dt2.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
     
        if ((Difference_In_Days>0) &&(Difference_In_Days<30)){
          setSelect(true);
      
            return select;
      }
     

    }
 
 
    getDate();
    

    });


  const receiptDate =  product.receiptDate ? moment(product.receiptDate).format(shortDateFormat) : '-';
  const expirationDate =  product.expirationDate ? moment(product.expirationDate).format(shortDateFormat) : '-';
  const createdAt = product.createdAt ? moment(product.createdAt).format(longDateFormat) : '-';

  return (
    <Card>
      <CardBody  >
        <CardTitle>
          {!select ===false ?(<h4>{product.name}</h4>):(
           <Link to={`/edit/${product.id}`}  >{product.name}</Link>
          )
        
    }   
          <Button close onClick={() => onDelete(product.id)} />
        </CardTitle>
        <CardText tag="div">
          <ListGroup>
            <ListGroupItem>Brand: {product.brand}</ListGroupItem>
            <ListGroupItem>Rating: {product.rating}</ListGroupItem>
            <ListGroupItem>Featured: {product.featured ? 'Yes' : 'No'}</ListGroupItem>
            <ListGroupItem>Items In Stock: {product.itemsInStock}</ListGroupItem>
            <ListGroupItem>
              Categories:
              <ul>
                {product.categories.map(category => (
                  <li key={category.id}>{category.name}</li>
                ))}
              </ul>
            </ListGroupItem>
            <ListGroupItem>Receipt Date: {receiptDate}</ListGroupItem>
            <ListGroupItem>Expiration Date: {expirationDate}</ListGroupItem>
            <ListGroupItem>Created At: {createdAt}</ListGroupItem>
          </ListGroup>
        </CardText>
      </CardBody>
    </Card>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Product;
