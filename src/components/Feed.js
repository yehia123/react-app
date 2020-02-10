import React from "react";
import { Desc } from "./Desc";

export const Feed = () => (
  <div className="container">
    <div className="row bg-dark top-rect">
      <h1 className="mx-auto text-white">
        Welcome To Jinder! Match submissions with escapes
      </h1>
    </div>
    <div className="row">
      <div className="col-sm box">
        <ul class="list-group">
          <li class="list-group-item active">Submissions</li>
          <li class="list-group-item">Traingle</li>
          <li class="list-group-item">Arm bar</li>
          <li class="list-group-item">Foot lock</li>
        </ul>
      </div>
      <div className="col-sm box">
        <Desc />
      </div>
      <div className="col-sm box">
        <ul class="list-group">
          <li class="list-group-item active">Counters</li>
          <li class="list-group-item">Knee Push knee over</li>
          <li class="list-group-item">Rear Naked Hand Motion</li>
          <li class="list-group-item">Shove Knee Inside</li>
        </ul>
      </div>
    </div>
  </div>
);
