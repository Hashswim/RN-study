/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Styled from 'styled-components/native';
import Counter from './Screens/Counter';

const Container = Styled.View`
    flex: 1;
    background-color: #EEE;
`;

const App = ({ }: Props) => {
    return(
        <Container>
            <Counter title="This is a Counter App" initValue={5} />
        </Container>
    );
};

export default App;
