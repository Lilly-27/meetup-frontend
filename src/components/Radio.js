import React, {useState} from 'react'



function Radio() {

    const [value, setValue] = useState(false);

    const handleChange = () => {
      setValue(!value);
    };

  return (
    <div>
      <label>
        <input type="radio" checked={value} name="tag" onChange={handleChange} />
      </label>
    </div>
  )
}

export default Radio