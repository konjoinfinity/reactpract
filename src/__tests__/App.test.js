import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import App from '/Users/new/reactpract/src/App.js';
import Insertion from '<ADD FILE PATH>';
import TransitionGroup from '<ADD FILE PATH>';

describe('App Component', () => {
  const wrapper = shallow(<App />);
  
  it('Contains Insertion component', () => {
    expect(wrapper.find(Insertion).length).toBe(6)
  })
  
  it('Contains TransitionGroup component', () => {
    expect(wrapper.find(TransitionGroup).length).toBe(2)
  })
  
  it('App includes html elements', () => {
    expect(wrapper.find('div').length).toEqual(3);
    expect(wrapper.find('br').length).toEqual(6);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('[object Object]').length).toEqual(6);
    expect(wrapper.find('NO_COMPONENT_SELECTOR').length).toEqual(6);
    expect(wrapper.find('button').length).toEqual(2);
    expect(wrapper.find('span').length).toEqual(2);
    expect(wrapper.find('ul').length).toEqual(1);
  });

  it('App includes correct html innerText', () => {
  }); 
});

describe('Insertion Component', () => {
  let InsertionProps = {"cache":{"key":"css","sheet":{"isSpeedy":false,"tags":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"ctr":17,"key":"css","container":{},"before":null,"_alreadyInsertedOrderInsensitiveRule":true},"inserted":{"w60cv3-MuiButton-root":true,"1e6y48t-MuiButtonBase-root-MuiButton-root":true,"i4bv87-MuiSvgIcon-root":true,"8je8zh-MuiTouchRipple-root":true},"registered":{"css-w60cv3-MuiButton-root":"label:MuiButton-root;font-family:\"Roboto\", \"Helvetica\", \"Arial\", sans-serif;font-weight:500;font-size:0.875rem;line-height:1.75;letter-spacing:0.02857em;text-transform:uppercase;min-width:64px;padding:6px 8px;border-radius:4px;transition:background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;&:hover{text-decoration:none;background-color:rgba(25, 118, 210, 0.04);@media (hover: none){background-color:transparent;}}&:active{}&.Mui-focusVisible{}&.Mui-disabled{color:rgba(0, 0, 0, 0.26);}color:#1976d2;"}},"serialized":{"name":"w60cv3-MuiButton-root","styles":"label:MuiButton-root;font-family:\"Roboto\", \"Helvetica\", \"Arial\", sans-serif;font-weight:500;font-size:0.875rem;line-height:1.75;letter-spacing:0.02857em;text-transform:uppercase;min-width:64px;padding:6px 8px;border-radius:4px;transition:background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;&:hover{text-decoration:none;background-color:rgba(25, 118, 210, 0.04);@media (hover: none){background-color:transparent;}}&:active{}&.Mui-focusVisible{}&.Mui-disabled{color:rgba(0, 0, 0, 0.26);}color:#1976d2;"},"isStringTag":false};
  
  const wrapper = shallow(<Insertion {...InsertionProps} />);
   
});

describe('Insertion Component', () => {
  let InsertionProps = {"cache":{"key":"css","sheet":{"isSpeedy":false,"tags":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"ctr":17,"key":"css","container":{},"before":null,"_alreadyInsertedOrderInsensitiveRule":true},"inserted":{"w60cv3-MuiButton-root":true,"1e6y48t-MuiButtonBase-root-MuiButton-root":true,"i4bv87-MuiSvgIcon-root":true,"8je8zh-MuiTouchRipple-root":true},"registered":{"css-w60cv3-MuiButton-root":"label:MuiButton-root;font-family:\"Roboto\", \"Helvetica\", \"Arial\", sans-serif;font-weight:500;font-size:0.875rem;line-height:1.75;letter-spacing:0.02857em;text-transform:uppercase;min-width:64px;padding:6px 8px;border-radius:4px;transition:background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;&:hover{text-decoration:none;background-color:rgba(25, 118, 210, 0.04);@media (hover: none){background-color:transparent;}}&:active{}&.Mui-focusVisible{}&.Mui-disabled{color:rgba(0, 0, 0, 0.26);}color:#1976d2;"}},"serialized":{"name":"1e6y48t-MuiButtonBase-root-MuiButton-root","styles":"label:MuiButtonBase-root;display:inline-flex;align-items:center;justify-content:center;position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;background-color:transparent;outline:0;border:0;margin:0;border-radius:0;padding:0;cursor:pointer;user-select:none;vertical-align:middle;-moz-appearance:none;-webkit-appearance:none;text-decoration:none;color:inherit;&::-moz-focus-inner{border-style:none;}&.Mui-disabled{pointer-events:none;cursor:default;}@media print{color-adjust:exact;}label:MuiButton-root;font-family:\"Roboto\", \"Helvetica\", \"Arial\", sans-serif;font-weight:500;font-size:0.875rem;line-height:1.75;letter-spacing:0.02857em;text-transform:uppercase;min-width:64px;padding:6px 8px;border-radius:4px;transition:background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;&:hover{text-decoration:none;background-color:rgba(25, 118, 210, 0.04);@media (hover: none){background-color:transparent;}}&:active{}&.Mui-focusVisible{}&.Mui-disabled{color:rgba(0, 0, 0, 0.26);}color:#1976d2;;"},"isStringTag":true};
  
  const wrapper = shallow(<Insertion {...InsertionProps} />);
   
});

describe('Insertion Component', () => {
  let InsertionProps = {"cache":{"key":"css","sheet":{"isSpeedy":false,"tags":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"ctr":17,"key":"css","container":{},"before":null,"_alreadyInsertedOrderInsensitiveRule":true},"inserted":{"w60cv3-MuiButton-root":true,"1e6y48t-MuiButtonBase-root-MuiButton-root":true,"i4bv87-MuiSvgIcon-root":true,"8je8zh-MuiTouchRipple-root":true},"registered":{"css-w60cv3-MuiButton-root":"label:MuiButton-root;font-family:\"Roboto\", \"Helvetica\", \"Arial\", sans-serif;font-weight:500;font-size:0.875rem;line-height:1.75;letter-spacing:0.02857em;text-transform:uppercase;min-width:64px;padding:6px 8px;border-radius:4px;transition:background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;&:hover{text-decoration:none;background-color:rgba(25, 118, 210, 0.04);@media (hover: none){background-color:transparent;}}&:active{}&.Mui-focusVisible{}&.Mui-disabled{color:rgba(0, 0, 0, 0.26);}color:#1976d2;"}},"serialized":{"name":"8je8zh-MuiTouchRipple-root","styles":"label:MuiTouchRipple-root;overflow:hidden;pointer-events:none;position:absolute;z-index:0;top:0;right:0;bottom:0;left:0;border-radius:inherit;"},"isStringTag":true};
  
  const wrapper = shallow(<Insertion {...InsertionProps} />);
   
});

describe('TransitionGroup Component', () => {
  let mockchildFactory = jest.fn();
  let TransitionGroupProps = {"component":null,"exit":true,"children":[],"childFactory":"mockchildFactory"};
  
  const wrapper = shallow(<TransitionGroup {...TransitionGroupProps} />);
  
  it('TransitionGroup includes html elements', () => {
    expect(wrapper.find('[object Object]').length).toEqual(1);
  });
 
});

describe('Insertion Component', () => {
  let InsertionProps = {"cache":{"key":"css","sheet":{"isSpeedy":false,"tags":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"ctr":17,"key":"css","container":{},"before":null,"_alreadyInsertedOrderInsensitiveRule":true},"inserted":{"w60cv3-MuiButton-root":true,"1e6y48t-MuiButtonBase-root-MuiButton-root":true,"i4bv87-MuiSvgIcon-root":true,"8je8zh-MuiTouchRipple-root":true},"registered":{"css-w60cv3-MuiButton-root":"label:MuiButton-root;font-family:\"Roboto\", \"Helvetica\", \"Arial\", sans-serif;font-weight:500;font-size:0.875rem;line-height:1.75;letter-spacing:0.02857em;text-transform:uppercase;min-width:64px;padding:6px 8px;border-radius:4px;transition:background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;&:hover{text-decoration:none;background-color:rgba(25, 118, 210, 0.04);@media (hover: none){background-color:transparent;}}&:active{}&.Mui-focusVisible{}&.Mui-disabled{color:rgba(0, 0, 0, 0.26);}color:#1976d2;"}},"serialized":{"name":"w60cv3-MuiButton-root","styles":"label:MuiButton-root;font-family:\"Roboto\", \"Helvetica\", \"Arial\", sans-serif;font-weight:500;font-size:0.875rem;line-height:1.75;letter-spacing:0.02857em;text-transform:uppercase;min-width:64px;padding:6px 8px;border-radius:4px;transition:background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;&:hover{text-decoration:none;background-color:rgba(25, 118, 210, 0.04);@media (hover: none){background-color:transparent;}}&:active{}&.Mui-focusVisible{}&.Mui-disabled{color:rgba(0, 0, 0, 0.26);}color:#1976d2;"},"isStringTag":false};
  
  const wrapper = shallow(<Insertion {...InsertionProps} />);
   
});

describe('Insertion Component', () => {
  let InsertionProps = {"cache":{"key":"css","sheet":{"isSpeedy":false,"tags":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"ctr":17,"key":"css","container":{},"before":null,"_alreadyInsertedOrderInsensitiveRule":true},"inserted":{"w60cv3-MuiButton-root":true,"1e6y48t-MuiButtonBase-root-MuiButton-root":true,"i4bv87-MuiSvgIcon-root":true,"8je8zh-MuiTouchRipple-root":true},"registered":{"css-w60cv3-MuiButton-root":"label:MuiButton-root;font-family:\"Roboto\", \"Helvetica\", \"Arial\", sans-serif;font-weight:500;font-size:0.875rem;line-height:1.75;letter-spacing:0.02857em;text-transform:uppercase;min-width:64px;padding:6px 8px;border-radius:4px;transition:background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;&:hover{text-decoration:none;background-color:rgba(25, 118, 210, 0.04);@media (hover: none){background-color:transparent;}}&:active{}&.Mui-focusVisible{}&.Mui-disabled{color:rgba(0, 0, 0, 0.26);}color:#1976d2;"}},"serialized":{"name":"1e6y48t-MuiButtonBase-root-MuiButton-root","styles":"label:MuiButtonBase-root;display:inline-flex;align-items:center;justify-content:center;position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;background-color:transparent;outline:0;border:0;margin:0;border-radius:0;padding:0;cursor:pointer;user-select:none;vertical-align:middle;-moz-appearance:none;-webkit-appearance:none;text-decoration:none;color:inherit;&::-moz-focus-inner{border-style:none;}&.Mui-disabled{pointer-events:none;cursor:default;}@media print{color-adjust:exact;}label:MuiButton-root;font-family:\"Roboto\", \"Helvetica\", \"Arial\", sans-serif;font-weight:500;font-size:0.875rem;line-height:1.75;letter-spacing:0.02857em;text-transform:uppercase;min-width:64px;padding:6px 8px;border-radius:4px;transition:background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;&:hover{text-decoration:none;background-color:rgba(25, 118, 210, 0.04);@media (hover: none){background-color:transparent;}}&:active{}&.Mui-focusVisible{}&.Mui-disabled{color:rgba(0, 0, 0, 0.26);}color:#1976d2;;"},"isStringTag":true};
  
  const wrapper = shallow(<Insertion {...InsertionProps} />);
   
});

describe('Insertion Component', () => {
  let InsertionProps = {"cache":{"key":"css","sheet":{"isSpeedy":false,"tags":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"ctr":17,"key":"css","container":{},"before":null,"_alreadyInsertedOrderInsensitiveRule":true},"inserted":{"w60cv3-MuiButton-root":true,"1e6y48t-MuiButtonBase-root-MuiButton-root":true,"i4bv87-MuiSvgIcon-root":true,"8je8zh-MuiTouchRipple-root":true},"registered":{"css-w60cv3-MuiButton-root":"label:MuiButton-root;font-family:\"Roboto\", \"Helvetica\", \"Arial\", sans-serif;font-weight:500;font-size:0.875rem;line-height:1.75;letter-spacing:0.02857em;text-transform:uppercase;min-width:64px;padding:6px 8px;border-radius:4px;transition:background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;&:hover{text-decoration:none;background-color:rgba(25, 118, 210, 0.04);@media (hover: none){background-color:transparent;}}&:active{}&.Mui-focusVisible{}&.Mui-disabled{color:rgba(0, 0, 0, 0.26);}color:#1976d2;"}},"serialized":{"name":"8je8zh-MuiTouchRipple-root","styles":"label:MuiTouchRipple-root;overflow:hidden;pointer-events:none;position:absolute;z-index:0;top:0;right:0;bottom:0;left:0;border-radius:inherit;"},"isStringTag":true};
  
  const wrapper = shallow(<Insertion {...InsertionProps} />);
   
});

describe('TransitionGroup Component', () => {
  let mockchildFactory = jest.fn();
  let TransitionGroupProps = {"component":null,"exit":true,"children":[],"childFactory":"mockchildFactory"};
  
  const wrapper = shallow(<TransitionGroup {...TransitionGroupProps} />);
  
  it('TransitionGroup includes html elements', () => {
    expect(wrapper.find('[object Object]').length).toEqual(1);
  });
 
});