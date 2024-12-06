import CheckOutMain from '@/components/checkout/CheckOutMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const CheckoutPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <CheckOutMain/>
                </main>
            </Wrapper>
        </>
    );
};

export default CheckoutPage;