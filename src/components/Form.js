import React from "react";

export default function Form(
    {formData,
    setFormData,
    setGoalMessage,
    genderData
    }) {
    

        function handleChange(event) {
            const {name, value} = event.target
                setFormData(prevFormData => {
                    return {
                        ...prevFormData,
                        [name]: value
                    }
                })
        }
       

        function handleSubmit(event) {
            event.preventDefault()
            
            
        }
        function submitShow() {
            setGoalMessage(prevSetGoal => !prevSetGoal)
           console.log(genderData)

        }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                value={formData.name}
            />
            <input
                type="text"
                placeholder="age"
                name="age"
                onChange={handleChange}
                value={formData.age}
            />
            <input
                type="text"
                placeholder="weight(kg)"
                name="weight"
                onChange={handleChange}
                value={formData.weight}
            />
            <input
                type="text"
                placeholder="height(cm)"
                name="height"
                onChange={handleChange}
                value={formData.height}
            />
            
            
            <fieldset>
                <legend>Gender</legend>
                <input 
                    type="radio"
                    name="gender"
                    checked={formData.gender === "male"}
                   id="male"
                   value="male"
                   onChange={handleChange}
                />
                <label htmlFor="male">Male</label>
                <br />
                
                <input 
                    type="radio"
                   id="female"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                />
                <label htmlFor="female">Female</label>
                <br />
            </fieldset>
          
            
            
            
            <br />
            <button className="submit" onClick={submitShow}>Submit</button>
            
        </form>
        
    )
}