import React from "react";

export const Feed = () => (
  <div className="container">
    <div className="row top-rect">
      <p>Row 1</p>
    </div>
    <div className="row">
      <div className="col-sm box">
        <ul class="list-group">
          <li class="list-group-item active">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
      <div className="col-sm box">
      <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
      <div className="col-sm box">One of three columns</div>
    </div>
  </div>
);
