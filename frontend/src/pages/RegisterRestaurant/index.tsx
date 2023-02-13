import React from 'react'



<form>

  <div className="form-outline mb-4">
    <input type="password" id="form1Example2" className="form-control" />
    <label className="form-label" htmlFor="form1Example2">Nome do Restaurante</label>
  </div>

  <div className="form-outline mb-4">
    <input type="email" id="form1Example1" className="form-control" />
    <label className="form-label" htmlFor="form1Example1">CNPJ</label>
  </div>

  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
        <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
      </div>
    </div>

  </div>

  <button type="submit" className="btn btn-primary btn-block">Cadastrar</button>
</form>