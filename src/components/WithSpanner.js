import React from 'react';

const WithSpanner = WrappedComponent => (isLoading,...otherProps) => {
    return isLoading ? (
        <h1>Loading.....</h1>
    ) : (
        <WrappedComponent {...otherProps} />
    );
}
export default WithSpanner