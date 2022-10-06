import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getProductById} from '../../../reducers/products';

import {Link} from 'react-router-dom';
import {updateProduct} from "../../../actions/products"

import ProductForm from './ProductForm';
class UpdateFormContainer extends Component {

    render() {
        const {product, categories,dispatch} = this.props;

        if (!product) {
            return null;
        }

        return (
            <>
                <Link to='/'>Home</Link>
                <ProductForm
                    onSave={(data) => {dispatch(updateProduct(data.id,data))}}
                    product={product}
                    categories={categories}
                />
            </>
        );
    }
}

UpdateFormContainer.propTypes = {
    product: PropTypes.object,
    categories: PropTypes.array,
    history: PropTypes.object,
};

const mapStateToProps = (state, {productId}) => {
    
    return {
        product: getProductById(state, productId),
        categories: state.categories,
    }
};

export default connect(mapStateToProps)(UpdateFormContainer);
