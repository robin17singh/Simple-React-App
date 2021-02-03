import React from 'react';
import '../App.css';
import './Facts.css';

function FactSection() {
  return (

    <div>
      <table class="table">
        <thead class="thead">
          <tr class="tr">
            <th class="th" colspan="3" class="small-info">
              Amount Per Serving
        </th>
          </tr>
        </thead>
        <tbody>
          <tr class="tr">
            <th class="th" colspan="2">
              <b>Calories</b>
          200
        </th>
            <td class="td">
              Calories from Fat
              130
        </td>
          </tr>
          <tr>
            <th class="th" colspan="2">
              <b>Total Fat</b>
          14g
        </th>
            <td class="td">
              <b>22%</b>
            </td>
          </tr>
          <tr class="tr">
            <td class="blank-cell">
            </td>
            <th class="th">
              Saturated Fat
              9g
        </th>
            <td class="td">
              <b>22%</b>
            </td>
          </tr>
          <tr class="tr">
            <td class="blank-cell">
            </td>
            <th class="th">
              Trans Fat
              0g
        </th>
            <td class="td">
            </td>
          </tr>
          <tr class="tr">
            <th class="th" colspan="2">
              <b>Cholesterol</b>
          55mg
        </th>
            <td class="td">
              <b>18%</b>
            </td>
          </tr>
          <tr class="tr">
            <th class="th" colspan="2">
              <b>Sodium</b>
          40mg
        </th>
            <td class="td">
              <b>2%</b>
            </td>
          </tr>
          <tr class="tr">
            <th class="th" colspan="2">
              <b>Total Carbohydrate</b>
          17g
        </th>
            <td class="td">
              <b>6%</b>
            </td>
          </tr>
          <tr class="tr">
            <td class="blank-cell">
            </td>
            <th class="th">
              Dietary Fiber
              1g
        </th>
            <td class="td">
              <b>4%</b>
            </td>
          </tr>
          <tr class="tr">
            <td class="blank-cell">
            </td>
            <th class="th">
              Sugars
              14g
        </th>
            <td class="td">
            </td>
          </tr>
          <tr class="tr">
            <th class="th" colspan="2">
              <b>Protein</b>
          3g
        </th>
            <td class="td">
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  );
}

export default FactSection;
