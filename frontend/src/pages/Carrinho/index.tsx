import React from 'react'





const Carrinho = () => {
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: '#d2c9ff;' }}>
    <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
                <div className="card card-registration card-registration-2" style={{ borderRadius: "15px;" }}>
                    <div className="card-body p-0">
                        <div className="row g-0">
                            <div className="col-lg-8">
                                <div className="p-5">
                                    <div className="d-flex justify-content-between align-items-center mb-5">
                                        <h1 className="fw-bold mb-0 text-black">Carrinho</h1>
                                        <h6 className="mb-0 text-muted">3 items</h6>
                                    </div>
                                    <hr className="my-4" />

                                    <div className="row mb-4 d-flex justify-content-between align-items-center">
                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                            <img
                                                src="https://i.imgur.com/eFWRUuR.jpg"
                                                className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                            <h6 className="text-muted">Queijo, Alho, Cebola...</h6>
                                            <h6 className="text-black mb-0">Hamburguer de batata com queijo</h6>
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                            <button className="btn btn-link px-2"
                                            >
                                                <i className="fas fa-minus"></i>
                                            </button>

                                            <input id="form1" min="0" name="quantity" value="1" type="number"
                                                className="form-control form-control-sm" />

                                            <button className="btn btn-link px-2"
                                            >
                                                <i className="fas fa-plus"></i>
                                            </button>
                                        </div>
                                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                            <h6 className="mb-0">R$ 44.00</h6>
                                        </div>
                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                            <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                                        </div>
                                    </div>



                                    <hr className="my-4" />

                                    <div className="pt-5">
                                        <h6 className="mb-0"><a href="#!" className="text-body"><i
                                            className="fas fa-long-arrow-alt-left me-2"></i>Voltar</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 bg-grey">
                                <div className="p-5">
                                    <h3 className="fw-bold mb-5 mt-2 pt-1">Resumo</h3>
                                    <hr className="my-4" />

                                    <div className="d-flex justify-content-between mb-4">
                                        <h5 className="text-uppercase">items 3</h5>
                                        <h5>R$ 132.00</h5>
                                    </div>

                                    <hr className="my-4" />

                                    <div className="d-flex justify-content-between mb-5">
                                        <h5 className="text-uppercase">Total:</h5>
                                        <h5>R$ 137.00</h5>
                                    </div>

                                    <button type="button" className="btn btn-dark btn-block btn-lg"
                                        data-mdb-ripple-color="dark">Comprar</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Carrinho