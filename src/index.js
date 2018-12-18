import React from 'react';
import { render } from 'react-dom';
import Parent from './Parent'

const CompositeComponent = () => <Parent />;

render(<CompositeComponent/>, document.getElementById('root'));

// don't overwrite this!
module.hot.accept();