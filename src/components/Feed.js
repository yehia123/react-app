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
          <li class="list-group-item active">Click A Submission</li>
          <li class="list-group-item">Submissions</li>
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
          <li class="list-group-item text-center active">
            BJJ Rule(s) of thumb
          </li>
          <li class="list-group-item">Setups, setups, setups.</li>
          <li class="list-group-item">Move yourself, not the other person.</li>
          <li class="list-group-item">
            When passing guard, keep their feet off of you at all times.
          </li>
          <li class="list-group-item">Posture control = Guard retention.</li>
          <li class="list-group-item">
            keep your enemies close, keep your elbows closer
          </li>
          <li class="list-group-item">Fight grips.</li>
          <li class="list-group-item">The guard is a battle of posture.</li>
        </ul>
      </div>
    </div>
  </div>
);
