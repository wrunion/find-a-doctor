/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */ 
import './styles.css';
import $ from 'jquery';
import './../.env';

$(document).ready(function() {
  $('form').submit(function() {
    const symptom = $('#primary-symptom-input').val().toLowerCase();
    console.log(symptom);
    const outputDiv = $("div#results");
    outputDiv.append(`
      <h1>Doctors</h1>
      <h3>Your primary symptom is ${symptom}. Here's a list of doctors that can help!</h3>
    `);
    event.preventDefault();
  });
});