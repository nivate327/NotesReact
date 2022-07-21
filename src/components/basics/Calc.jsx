const add=(a, b)=>
{
    let add=a + b;
    return add;
}

const sub=(a, b)=>
{
    let add=a - b;
    return add;
}

const mult=(a, b)=>
{
    let add=a * b;
    return add;
}

const div=(a, b)=>
{
    let div=a / b;

    div=div.toFixed();
    return div;
}

export {add, mult, sub, div};

{/*
   
      <div className="container-fluid" style={{ background: bg }}>
        <div className="row">

          {Arr.map((val)=>
            {
              return (
                <>
                  <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
                    <div className="mycards mx-4 my-4">
                    <Card title={val.title} imgsrc={val.imgsrc} text={val.text} />
                    </div>
                    
                  </div>
                </>
              )
            })} */}

      {/* <Favs /> 

        {series==="netflix" ? <Netflix/> : <Amzon/>}

         

        <SlotM x="😄" y="😄" z="😄"/>
        <br />
        <SlotM x="😄" y="🥰" z="😸"/>
        <br />
        <SlotM x="🍎" y="🍎" z="🍎"/>

        *

        <h1> {newTime} </h1>
        <br />
          */}
      {/* <form onSubmit={changeBg} className="form-group"> 
            <h1>Hello {input.fname} {input.lname}</h1>
           
            <input type="text"
              onChange={inputChange}
              placeholder="Enter Here Name First"
              className='form-control'
              value={input.fname}
              name="fname"
            />

            <input type="text"
              onChange={inputChange}
              placeholder="Enter Here Name Last"
              className='form-control'
              name='lname'
              value={input.lname}
        /> */}

      {/* <button type='submit' className="btn btn-info">{nameHere}</button> */}
      {/*</form>
        </div>
      </div> */}


      
  /*let date=new Date();
  let time = date.toLocaleTimeString();


  const [newTime, setCount]=useState(time);

  setInterval(()=>
  {
    date=new Date()
    let Ntime = date.toLocaleTimeString();

    setCount(Ntime);
  }, 1000);

 */

  /*
  let purple = "purple";
  let name = "Click Now";
  const [bg, setBg] = useState(purple);
  const [nameHere, setName] = useState(name);
  //first
  const [input, setValue] = useState({
    fname: "",
    lname: "",
  });


  const changeBg = (event) => {

    event.preventDefault();
    let red = "red";
    let newName = "ohh !! 🐺";
    setBg(red);
    setName(newName);

  }

  const newSet = () => {
    setBg(purple);
    setName("Awesome 😄");
  }


  const inputChange = (event) => {
    let { name, value } = event.target;

    setValue((preVal) => {
      console.log(preVal);

      return {
        ...preVal,
        [name]: value
      }
    });
  }

*/

//const series = "netflix";
/*
const Favs = () => {
 

  if (series === "netflix") {
    return <Netflix />
  } else {
    return <Amzon />
  }
}

*/

/*
const SlotM=(props)=>
{
  let x=props.x;
  let y=props.y;
  let z=props.z;

  if(x===y && y===z)
  {
    return(
      <>
        <h2>This Is Mathching {x} {y} {z}</h2>
      </>
    )
  }
  else{
    return(
      <>
        <h2>This Is Not Mathching {x} {y} {z}</h2>
      </>
    )
  }

}
*/


