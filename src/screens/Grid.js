import { Fragment } from "react";

export function Grid() {
  return (
    <Fragment>
    

      <table className="  table-responsive table">
        <thead class="thead-dark">
          <tr>
            <th>S.NO</th>
            <th>DISTRIBUTOR ID</th>
            <th>REGI.DATE</th>
            <th>NAME</th>
            <th>DESIGNATION</th>
            <th>%</th>
            <th>PREV.CUMV</th>
            <th>EXCLUSIVE PV</th>
            <th>SELF PV</th>
            <th>GROUP PV</th>
            <th>TOTAL PV</th>
            <th>SHORT POINTS</th>
            <th>NEXT LEVEL(%)</th>
            <th>VIEW</th>
          </tr>
        </thead>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
        </tr>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>80</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
          <td>50</td>
        </tr>
      </table>
    </Fragment>
  );
}
