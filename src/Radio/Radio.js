import React from 'react';
import Label from './style/LabelStyled';
import RadioStyled from './style/RadioStyled';
class Radio extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onSelect=this.onSelect.bind(this);

  }

  onSelect(e){
    const {onChange,onSelected,index,id,value,name}=this.props;
    if(onSelected &&  e.target.checked){
      onSelected(index,id,value,name);
    }
    if(onChange)
      onChange(e);
  }
  render() {
    const {
      label,
      name,
      checked,index
    }=this.props;

    return (
      <Label {...this.props} >
        <RadioStyled
                     {...this.props}
                     type="radio"
                     name={name}
                     onChange={this.onSelect}
                     checked={checked}
        />
        {label}
      </Label>
    )
  }
}

export default Radio;
