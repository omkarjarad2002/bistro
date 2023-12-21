import React from "react";

function Spinner() {
  return (
    <div>
      <div class="text-center spinner">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
