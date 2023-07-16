const { useState } = require("react");
const { useEffect } = require("react");

function fetch() {

const [pacientes,setPacientes]= useState([]) 


  useEffect(() => {
    
    async function getPacientes() {

      const paciente = await (await fakeFetch('http://localhost:9090/pacientes)).json()'))
  
      setPacientes(paciente)
      console.log(pacientes);
    }


    getPacientes();
  }, []);
}
