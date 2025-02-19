

function reset(evt, form) {
  thingPressed = getThingPressed(evt);

  if (thingPressed == 114) {
    // pressing "r" resets the form

    document.pcset.reset();

    return;
  }
}


function getThingPressed(evt) {
  evt = evt ? evt : window.event ? window.event : "";

  if (evt) {
    var thingPressed = "";

    var elem = evt.target ? evt.target : evt.srcElement;

    if (evt.which) {
      thingPressed = evt.which;
    } else {
      thingPressed = evt.keyCode;
    }
  }

  return thingPressed;
}

function addSpaces(form, thingPressed) {
  // The following if statement means if (character is between 0 and 9

  // or, the character is "e", "E", "t", or "T").

  if (
    form.yourSet.value.length != 0 &&
    ((thingPressed >= 48 && thingPressed <= 57) ||
      thingPressed == 69 ||
      thingPressed == 84 ||
      thingPressed == 101 ||
      thingPressed == 116)
  )
    form.yourSet.value += " ";
}

// Scans the "yourSet" field and checks off boxes accordingly

function scanField(form) {
  field = form.yourSet.value;

  for (
    var i = 0;
    i < form.length;
    i++ //unchecks everything
  ) {
    if (form.elements[i].type == "checkbox") form.elements[i].checked = false;
  }

  for (
    var i = 0;
    i < field.length;
    i++ // scans the "yourSet" text field and checks off boxes accordingly.
  ) {
    if (field.charAt(i) != " ") {
      switch (field.charAt(i)) {
        case "t":
          if (form.elements[10].checked == false) check(10);

          break;

        case "T":
          if (form.elements[10].checked == false) check(10);

          break;

        case "e":
          if (form.elements[11].checked == false) check(11);

          break;

        case "E":
          if (form.elements[11].checked == false) check(11);

          break;

        case "0":
          if (form.elements[0].checked == false)
            check(parseInt(field.charAt(i)));

          break;

        case "1":
          if (form.elements[1].checked == false)
            check(parseInt(field.charAt(i)));

          break;

        case "2":
          if (form.elements[2].checked == false)
            check(parseInt(field.charAt(i)));

          break;

        case "3":
          if (form.elements[3].checked == false)
            check(parseInt(field.charAt(i)));

          break;

        case "4":
          if (form.elements[4].checked == false)
            check(parseInt(field.charAt(i)));

          break;

        case "5":
          if (form.elements[5].checked == false)
            check(parseInt(field.charAt(i)));

          break;

        case "6":
          if (form.elements[6].checked == false)
            check(parseInt(field.charAt(i)));

          break;

        case "7":
          if (form.elements[7].checked == false)
            check(parseInt(field.charAt(i)));

          break;

        case "8":
          if (form.elements[8].checked == false)
            check(parseInt(field.charAt(i)));

          break;

        case "9":
          if (form.elements[9].checked == false)
            check(parseInt(field.charAt(i)));

          break;

        default:
      }

      // Using check(), instead of check() here speeds things up

      // considerably.
    }
  }
}

// This converts the checked boxes to characters and writes the characters

// to the "yourSet" field

function allCheckboxestoText(form) {
  form.yourSet.value = "";

  for (var i = 0; i < form.length; i++) {
    //assumes the first 12 elements are the 12 pc checkboxes

    if (form.elements[i].type == "checkbox" && form.elements[i].checked) {
      // The following lines ensure that as the box is checked

      // the number will display in the yourSet field.

      if (i <= 9) {
        if (form.yourSet.value.indexOf("" + i) == -1)
          form.yourSet.value += "" + i + " ";
      }

      if (i == 10) {
        if (
          form.yourSet.value.indexOf("t") == -1 &&
          form.yourSet.value.indexOf("T") == -1
        )
          form.yourSet.value += "t ";
      }

      if (i == 11)
        if (
          form.yourSet.value.indexOf("e") == -1 &&
          form.yourSet.value.indexOf("E") == -1
        )
          form.yourSet.value += "e ";
    }
  }
}

// self explanatory

function allCheckboxestoTextAndMain(form) {
  allCheckboxestoText(form);

  main(form, false);
}



function main(form, forteEntered) {
  var size = 0;

  var pcs = new Array();

  if (forteEntered) {
    field = form.forte.value;

    if (!(field.charAt(0) >= "3" && field.charAt(0) <= "9")) {
      form.reset();

      alert(field + ": Invalid Forte name");

      return;
    } else size = parseInt(field.charAt(0));

    if (field.charAt(2) == "Z")
      form.forte.value = form.forte.value.replace("Z", "z");
  } else {
    var j = -1;

    

    for (var i = 0; i < 12; i++) {
      //assumes the first 12 form elements are the 12 pc checkboxes

      if (form.elements[i].checked) {
        size++;

        j++;

        pcs[j] = parseInt(i);
      }
    }
  }

  if (size < 2) {
    clearFields(form);

    return;
  }

  // use of these multi-dimensional arrays are courtesy of Dr. Stephen Taylor

  // I use them to find the forte name for a prime form

  trichords = new Array();

  trichords[0] = new Array("3-1", "0,1,2");

  trichords[1] = new Array("3-2", "0,1,3");

  trichords[2] = new Array("3-3", "0,1,4");

  trichords[3] = new Array("3-4", "0,1,5");

  trichords[4] = new Array("3-5", "0,1,6");

  trichords[5] = new Array("3-6", "0,2,4");

  trichords[6] = new Array("3-7", "0,2,5");

  trichords[7] = new Array("3-8", "0,2,6");

  trichords[8] = new Array("3-9", "0,2,7");

  trichords[9] = new Array("3-10", "0,3,6");

  trichords[10] = new Array("3-11", "0,3,7");

  trichords[11] = new Array("3-12", "0,4,8");

  tetrachords = new Array();

  tetrachords[0] = new Array("4-1", "0,1,2,3");

  tetrachords[1] = new Array("4-2", "0,1,2,4");

  tetrachords[2] = new Array("4-3", "0,1,3,4");

  tetrachords[3] = new Array("4-4", "0,1,2,5");

  tetrachords[4] = new Array("4-5", "0,1,2,6");

  tetrachords[5] = new Array("4-6", "0,1,2,7");

  tetrachords[6] = new Array("4-7", "0,1,4,5");

  tetrachords[7] = new Array("4-8", "0,1,5,6");

  tetrachords[8] = new Array("4-9", "0,1,6,7");

  tetrachords[9] = new Array("4-10", "0,2,3,5");

  tetrachords[10] = new Array("4-11", "0,1,3,5");

  tetrachords[11] = new Array("4-12", "0,2,3,6");

  tetrachords[12] = new Array("4-13", "0,1,3,6");

  tetrachords[13] = new Array("4-14", "0,2,3,7");

  tetrachords[14] = new Array("4-z15", "0,1,4,6");

  tetrachords[15] = new Array("4-16", "0,1,5,7");

  tetrachords[16] = new Array("4-17", "0,3,4,7");

  tetrachords[17] = new Array("4-18", "0,1,4,7");

  tetrachords[18] = new Array("4-19", "0,1,4,8");

  tetrachords[19] = new Array("4-20", "0,1,5,8");

  tetrachords[20] = new Array("4-21", "0,2,4,6");

  tetrachords[21] = new Array("4-22", "0,2,4,7");

  tetrachords[22] = new Array("4-23", "0,2,5,7");

  tetrachords[23] = new Array("4-24", "0,2,4,8");

  tetrachords[24] = new Array("4-25", "0,2,6,8");

  tetrachords[25] = new Array("4-26", "0,3,5,8");

  tetrachords[26] = new Array("4-27", "0,2,5,8");

  tetrachords[27] = new Array("4-28", "0,3,6,9");

  tetrachords[28] = new Array("4-z29", "0,1,3,7");

  pentachords = new Array();

  pentachords[0] = new Array("5-1", "0,1,2,3,4");

  pentachords[1] = new Array("5-2", "0,1,2,3,5");

  pentachords[2] = new Array("5-3", "0,1,2,4,5");

  pentachords[3] = new Array("5-4", "0,1,2,3,6");

  pentachords[4] = new Array("5-5", "0,1,2,3,7");

  pentachords[5] = new Array("5-6", "0,1,2,5,6");

  pentachords[6] = new Array("5-7", "0,1,2,6,7");

  pentachords[7] = new Array("5-8", "0,2,3,4,6");

  pentachords[8] = new Array("5-9", "0,1,2,4,6");

  pentachords[9] = new Array("5-10", "0,1,3,4,6");

  pentachords[10] = new Array("5-11", "0,2,3,4,7");

  pentachords[11] = new Array("5-z12", "0,1,3,5,6");

  pentachords[12] = new Array("5-13", "0,1,2,4,8");

  pentachords[13] = new Array("5-14", "0,1,2,5,7");

  pentachords[14] = new Array("5-15", "0,1,2,6,8");

  pentachords[15] = new Array("5-16", "0,1,3,4,7");

  pentachords[16] = new Array("5-z17", "0,1,3,4,8");

  pentachords[17] = new Array("5-z18", "0,1,4,5,7");

  pentachords[18] = new Array("5-19", "0,1,3,6,7");

  pentachords[19] = new Array("5-20", "0,1,5,6,8");

  pentachords[20] = new Array("5-21", "0,1,4,5,8");

  pentachords[21] = new Array("5-22", "0,1,4,7,8");

  pentachords[22] = new Array("5-23", "0,2,3,5,7");

  pentachords[23] = new Array("5-24", "0,1,3,5,7");

  pentachords[24] = new Array("5-25", "0,2,3,5,8");

  pentachords[25] = new Array("5-26", "0,2,4,5,8");

  pentachords[26] = new Array("5-27", "0,1,3,5,8");

  pentachords[27] = new Array("5-28", "0,2,3,6,8");

  pentachords[28] = new Array("5-29", "0,1,3,6,8");

  pentachords[29] = new Array("5-30", "0,1,4,6,8");

  pentachords[30] = new Array("5-31", "0,1,3,6,9");

  pentachords[31] = new Array("5-32", "0,1,4,6,9");

  pentachords[32] = new Array("5-33", "0,2,4,6,8");

  pentachords[33] = new Array("5-34", "0,2,4,6,9");

  pentachords[34] = new Array("5-35", "0,2,4,7,9");

  pentachords[35] = new Array("5-z36", "0,1,2,4,7");

  pentachords[36] = new Array("5-z37", "0,3,4,5,8");

  pentachords[37] = new Array("5-z38", "0,1,2,5,8");

  hexachords = new Array();

  hexachords[0] = new Array("6-1", "0,1,2,3,4,5");

  hexachords[1] = new Array("6-2", "0,1,2,3,4,6");

  hexachords[2] = new Array("6-z3", "0,1,2,3,5,6");

  hexachords[3] = new Array("6-z4", "0,1,2,4,5,6");

  hexachords[4] = new Array("6-5", "0,1,2,3,6,7");

  hexachords[5] = new Array("6-z6", "0,1,2,5,6,7");

  hexachords[6] = new Array("6-7", "0,1,2,6,7,8");

  hexachords[7] = new Array("6-8", "0,2,3,4,5,7");

  hexachords[8] = new Array("6-9", "0,1,2,3,5,7");

  hexachords[9] = new Array("6-z10", "0,1,3,4,5,7");

  hexachords[10] = new Array("6-z11", "0,1,2,4,5,7");

  hexachords[11] = new Array("6-z12", "0,1,2,4,6,7");

  hexachords[12] = new Array("6-z13", "0,1,3,4,6,7");

  hexachords[13] = new Array("6-14", "0,1,3,4,5,8");

  hexachords[14] = new Array("6-15", "0,1,2,4,5,8");

  hexachords[15] = new Array("6-16", "0,1,4,5,6,8");

  hexachords[16] = new Array("6-z17", "0,1,2,4,7,8");

  hexachords[17] = new Array("6-18", "0,1,2,5,7,8");

  hexachords[18] = new Array("6-z19", "0,1,3,4,7,8");

  hexachords[19] = new Array("6-20", "0,1,4,5,8,9");

  hexachords[20] = new Array("6-21", "0,2,3,4,6,8");

  hexachords[21] = new Array("6-22", "0,1,2,4,6,8");

  hexachords[22] = new Array("6-z23", "0,2,3,5,6,8");

  hexachords[23] = new Array("6-z24", "0,1,3,4,6,8");

  hexachords[24] = new Array("6-z25", "0,1,3,5,6,8");

  hexachords[25] = new Array("6-z26", "0,1,3,5,7,8");

  hexachords[26] = new Array("6-27", "0,1,3,4,6,9");

  hexachords[27] = new Array("6-z28", "0,1,3,5,6,9");

  hexachords[28] = new Array("6-z29", "0,2,3,6,7,9");

  hexachords[29] = new Array("6-30", "0,1,3,6,7,9");

  hexachords[30] = new Array("6-31", "0,1,4,5,7,9");

  hexachords[31] = new Array("6-32", "0,2,4,5,7,9");

  hexachords[32] = new Array("6-33", "0,2,3,5,7,9");

  hexachords[33] = new Array("6-34", "0,1,3,5,7,9");

  hexachords[34] = new Array("6-35", "0,2,4,6,8,10");

  hexachords[35] = new Array("6-z36", "0,1,2,3,4,7");

  hexachords[36] = new Array("6-z37", "0,1,2,3,4,8");

  hexachords[37] = new Array("6-z38", "0,1,2,3,7,8");

  hexachords[38] = new Array("6-z39", "0,2,3,4,5,8");

  hexachords[39] = new Array("6-z40", "0,1,2,3,5,8");

  hexachords[40] = new Array("6-z41", "0,1,2,3,6,8");

  hexachords[41] = new Array("6-z42", "0,1,2,3,6,9");

  hexachords[42] = new Array("6-z43", "0,1,2,5,6,8");

  hexachords[43] = new Array("6-z44", "0,1,2,5,6,9");

  hexachords[44] = new Array("6-z45", "0,2,3,4,6,9");

  hexachords[45] = new Array("6-z46", "0,1,2,4,6,9");

  hexachords[46] = new Array("6-z47", "0,1,2,4,7,9");

  hexachords[47] = new Array("6-z48", "0,1,2,5,7,9");

  hexachords[48] = new Array("6-z49", "0,1,3,4,7,9");

  hexachords[49] = new Array("6-z50", "0,1,4,6,7,9");

  septachords = new Array();

  septachords[0] = new Array("7-1", "0,1,2,3,4,5,6");

  septachords[1] = new Array("7-2", "0,1,2,3,4,5,7");

  septachords[2] = new Array("7-3", "0,1,2,3,4,5,8");

  septachords[3] = new Array("7-4", "0,1,2,3,4,6,7");

  septachords[4] = new Array("7-5", "0,1,2,3,5,6,7");

  septachords[5] = new Array("7-6", "0,1,2,3,4,7,8");

  septachords[6] = new Array("7-7", "0,1,2,3,6,7,8");

  septachords[7] = new Array("7-8", "0,2,3,4,5,6,8");

  septachords[8] = new Array("7-9", "0,1,2,3,4,6,8");

  septachords[9] = new Array("7-10", "0,1,2,3,4,6,9");

  septachords[10] = new Array("7-11", "0,1,3,4,5,6,8");

  septachords[11] = new Array("7-z12", "0,1,2,3,4,7,9");

  septachords[12] = new Array("7-13", "0,1,2,4,5,6,8");

  septachords[13] = new Array("7-14", "0,1,2,3,5,7,8");

  septachords[14] = new Array("7-15", "0,1,2,4,6,7,8");

  septachords[15] = new Array("7-16", "0,1,2,3,5,6,9");

  septachords[16] = new Array("7-z17", "0,1,2,4,5,6,9");

  septachords[17] = new Array("7-z18", "0,1,4,5,6,7,9");

  // septachords[17] was packed to the left whereas most

  // sets listed were packed from the right, so I changed it.

  septachords[18] = new Array("7-19", "0,1,2,3,6,7,9");

  septachords[19] = new Array("7-20", "0,1,2,5,6,7,9");

  // septachords[19] was packed to the left whereas most

  // sets listed were packed from the right, so I changed it.

  septachords[20] = new Array("7-21", "0,1,2,4,5,8,9");

  septachords[21] = new Array("7-22", "0,1,2,5,6,8,9");

  septachords[22] = new Array("7-23", "0,2,3,4,5,7,9");

  septachords[23] = new Array("7-24", "0,1,2,3,5,7,9");

  septachords[24] = new Array("7-25", "0,2,3,4,6,7,9");

  septachords[25] = new Array("7-26", "0,1,3,4,5,7,9");

  septachords[26] = new Array("7-27", "0,1,2,4,5,7,9");

  septachords[27] = new Array("7-28", "0,1,3,5,6,7,9");

  septachords[28] = new Array("7-29", "0,1,2,4,6,7,9");

  septachords[29] = new Array("7-30", "0,1,2,4,6,8,9");

  septachords[30] = new Array("7-31", "0,1,3,4,6,7,9");

  septachords[31] = new Array("7-32", "0,1,3,4,6,8,9");

  septachords[32] = new Array("7-33", "0,1,2,4,6,8,10");

  septachords[33] = new Array("7-34", "0,1,3,4,6,8,10");

  septachords[34] = new Array("7-35", "0,1,3,5,6,8,10");

  septachords[35] = new Array("7-z36", "0,1,2,3,5,6,8");

  septachords[36] = new Array("7-z37", "0,1,3,4,5,7,8");

  septachords[37] = new Array("7-z38", "0,1,2,4,5,7,8");

  octachords = new Array();

  octachords[0] = new Array("8-1", "0,1,2,3,4,5,6,7");

  octachords[1] = new Array("8-2", "0,1,2,3,4,5,6,8");

  octachords[2] = new Array("8-3", "0,1,2,3,4,5,6,9");

  octachords[3] = new Array("8-4", "0,1,2,3,4,5,7,8");

  octachords[4] = new Array("8-5", "0,1,2,3,4,6,7,8");

  octachords[5] = new Array("8-6", "0,1,2,3,5,6,7,8");

  octachords[6] = new Array("8-7", "0,1,2,3,4,5,8,9");

  octachords[7] = new Array("8-8", "0,1,2,3,4,7,8,9");

  octachords[8] = new Array("8-9", "0,1,2,3,6,7,8,9");

  octachords[9] = new Array("8-10", "0,2,3,4,5,6,7,9");

  octachords[10] = new Array("8-11", "0,1,2,3,4,5,7,9");

  octachords[11] = new Array("8-12", "0,1,3,4,5,6,7,9");

  octachords[12] = new Array("8-13", "0,1,2,3,4,6,7,9");

  octachords[13] = new Array("8-14", "0,1,2,4,5,6,7,9");

  octachords[14] = new Array("8-z15", "0,1,2,3,4,6,8,9");

  octachords[15] = new Array("8-16", "0,1,2,3,5,7,8,9");

  octachords[16] = new Array("8-17", "0,1,3,4,5,6,8,9");

  octachords[17] = new Array("8-18", "0,1,2,3,5,6,8,9");

  octachords[18] = new Array("8-19", "0,1,2,4,5,6,8,9");

  octachords[19] = new Array("8-20", "0,1,2,4,5,7,8,9");

  octachords[20] = new Array("8-21", "0,1,2,3,4,6,8,10");

  octachords[21] = new Array("8-22", "0,1,2,3,5,6,8,10");

  octachords[22] = new Array("8-23", "0,1,2,3,5,7,8,10");

  octachords[23] = new Array("8-24", "0,1,2,4,5,6,8,10");

  octachords[24] = new Array("8-25", "0,1,2,4,6,7,8,10");

  octachords[25] = new Array("8-26", "0,1,3,4,5,7,8,10");

  // octachords[25] was packed to the left whereas most

  // sets listed were packed from the right, so I changed it.

  octachords[26] = new Array("8-27", "0,1,2,4,5,7,8,10");

  octachords[27] = new Array("8-28", "0,1,3,4,6,7,9,10");

  octachords[28] = new Array("8-z29", "0,1,2,3,5,6,7,9");

  nonachords = new Array();

  nonachords[0] = new Array("9-1", "0,1,2,3,4,5,6,7,8");

  nonachords[1] = new Array("9-2", "0,1,2,3,4,5,6,7,9");

  nonachords[2] = new Array("9-3", "0,1,2,3,4,5,6,8,9");

  nonachords[3] = new Array("9-4", "0,1,2,3,4,5,7,8,9");

  nonachords[4] = new Array("9-5", "0,1,2,3,4,6,7,8,9");

  nonachords[5] = new Array("9-6", "0,1,2,3,4,5,6,8,10");

  nonachords[6] = new Array("9-7", "0,1,2,3,4,5,7,8,10");

  nonachords[7] = new Array("9-8", "0,1,2,3,4,6,7,8,10");

  nonachords[8] = new Array("9-9", "0,1,2,3,5,6,7,8,10");

  nonachords[9] = new Array("9-10", "0,1,2,3,4,6,7,9,10");

  nonachords[10] = new Array("9-11", "0,1,2,3,5,6,7,9,10");

  nonachords[11] = new Array("9-12", "0,1,2,4,5,6,8,9,10");

  decachords = new Array();

  decachords[12] = new Array("10-1", "0,1,2,3,4,5,6,7,8,9");

  decachords[13] = new Array("10-2", "0,1,2,3,4,5,6,7,8,10");

  decachords[14] = new Array("10-3", "0,1,2,3,4,5,6,7,9,10");

  decachords[15] = new Array("10-4", "0,1,2,3,4,5,6,8,9,10");

  decachords[16] = new Array("10-5", "0,1,2,3,4,5,7,8,9,10");

  decachords[17] = new Array("10-6", "0,1,2,3,4,6,7,8,9,10");

  undecachords = new Array();

  undecachords[18] = new Array("11-1", "0,1,2,3,4,5,6,7,8,9,10");

  dodecachords = new Array();

  dodecachords[19] = new Array("12-1", "0,1,2,3,4,5,6,7,8,9,10,11");

  var chord = new Array();

  switch (size) {
    case 3:
      chord = trichords;
      break;
    case 4:
      chord = tetrachords;
      break;
    case 5:
      chord = pentachords;
      break;
    case 6:
      chord = hexachords;
      break;
    case 7:
      chord = septachords;
      break;
    case 8:
      chord = octachords;
      break;
    case 9:
      chord = nonachords;
      break;
    case 10:
      chord = decachords;
      break;
    case 11:
      chord = undecachords;
      break;
    case 12:
      chord = dodecachords;
      break;
  }

  // Validataing form.forte.value, if forteEntered == true

  if (forteEntered) {
    var foundForte = false;

    for (i = 0; i < chord.length; i++) {
      if (chord[i][0] == field) {
        foundForte = true;

        var index = i;

        i = chord.length;
      }
    }

    if (!foundForte && field.search("-z") > 0) {
      alert(field + " is an invalid Forte name");

      return;
    }

    if (!foundForte) {
      field = field.replace("-", "-z");

      // The user may forget to type in the z for certain sets, so lets

      // put it in!

      for (i = 0; i < chord.length; i++) {
        if (chord[i][0] == field) {
          foundForte = true;

          var index = i;

          i = chord.length;
        }
      }

      if (!foundForte) {
        form.reset();

        if (field.search("-z")) {
          var field2 = field;

          field = field.replace("-z", "-");

          alert(field + " or " + field2 + " are invalid Forte names");
        } else alert(field + " is an invalid Forte name");

        return;
      }
    }

    primeForm = convertToArray(chord[index][1]);

    var normalForm = primeForm;

    form.normal.value = displayPcs(normalForm, "[]", size);

    // The following activates the checkboxes so that when I click on the

    // T^N^ or T^N^I menus, everything doesn't reset.

    for (i = 0; i < 12; i++) form.elements[i].checked = false;

    // Unchecks everything.  This is necessary if it is the second time

    // that the user tries to enter a Forte name

    for (i = 0; i < size; i++) form.elements[primeForm[i]].checked = true;

    allCheckboxestoText(form);
  } else {
    var normalForm = getNorm(pcs, size);
    // alert(normalForm);
    form.normal.value = displayPcs(normalForm, "[]", size);
    //  alert(size);
    var primeForm = getPrime(normalForm, size);
  }

  form.prime.value = displayPcs(primeForm, "[]", size);




  //alert(primeForm);

  displayForte(primeForm, form, size, chord);

  form.zmate.value = ZMate(primeForm, chord, size);

  getTransInvariance(form, normalForm, size);

  getInvertInvariance(form, normalForm, size);

  var transposed_set = transposeSet(
    normalForm,
    size,
    form.transpose.options[form.transpose.selectedIndex].value
  );

  form.transposeField.value = displayPcs(transposed_set, "[]", size);

  var inverted_set = invertSet(
    normalForm,
    size,
    form.inverse.options[form.inverse.selectedIndex].value
  );

  form.inverseField.value = displayPcs(inverted_set, "[]", size);

  var icVect = new Array(7);

  for (i = 1; i < 7; i++) icVect[i] = 0;

  // I'm starting the array on 1, instead of 0, so that it's easier to read.

  icVect = icVector(primeForm, icVect, size, 0, 1);

  displayIcVector(form, icVect);

  startingIndex = 34;

  // the index of the top left corner of the matrix.  It may need to be

  // changed if the form element locations change

  if (size < 3) {
    form.subResults.value = "";

    form.superResults.value = "";

    clearMatrix(form, normalForm.length, startingIndex);

    return;
  }

  if (size < 10) displayMatrix(form, normalForm, startingIndex);
  else clearMatrix(form, normalForm.length, startingIndex);

  // *******The next part of this function is for subset  and superset calculation

  var chords = new Array();

  var subIndex = form.subCardinality.selectedIndex;

  var subSize = parseInt(form.subCardinality.options[subIndex].value);

  var superIndex = form.superCardinality.selectedIndex;

  var superSize = parseInt(form.superCardinality.options[superIndex].value);

  if (subSize >= size) {
    form.subResults.value =
      "The subset cardinality can not be greater than or equal to the cardinality of your set";
  }

  if (superSize <= size) {
    form.superResults.value =
      "The superset cardinality can not be less than or equal to the cardinality of your set";
  }

  if (subSize >= size && superSize <= size) return;

  switch (subSize) {
    case 3:
      chords = trichords;
      break;
    case 4:
      chords = tetrachords;
      break;
    case 5:
      chords = pentachords;
      break;
    case 6:
      chords = hexachords;
      break;
    case 7:
      chords = septachords;
      break;
    case 8:
      chords = octachords;
      break;
    case 9:
      chords = nonachords;
      break;

    case 2: // When the <option select ....> is selected
      form.subResults.value = "";

      if (superSize == 10) {
        // 10 is the <option select...> value for superCardinality
        form.superResults.value = "";
        return;
      }
    default:
  }

  if (subSize != 2 && subSize <= size)
    getSubsets(chords, primeForm, subSize, form);

  if (superSize <= size) return;

  switch (superSize) {
    case 3:
      chords = trichords;

      break;

    case 4:
      chords = tetrachords;

      break;

    case 5:
      chords = pentachords;

      break;

    case 6:
      chords = hexachords;

      break;

    case 7:
      chords = septachords;

      break;

    case 8:
      chords = octachords;

      break;

    case 9:
      chords = nonachords;

      break;

    case 11: // When the <option select ....> is selected
      form.superResults.value = "";

      return;

    default:
  }

  getSupersets(chords, primeForm, superSize, form);
}

// clears all text fields.

function clearFields(form) {
  for (var i = 0; i < form.length; i++) {
    if (form.elements[i].type == "text")
      if (form.elements[i] != form.yourSet) form.elements[i].value = "";
  }
}

// Returns the user's set in the form (a, b, c...etc).

// pcs: the set of pcs as an array.

// brack: the type of brackets you want, either "()" for displaying the

// user's PCs, "[]" for normal form, or "" for prime form.

// I don't use "()" for this script, but I thought someone else might.

// size: cardinality of the set

function displayPcs(pcs, brack, size) {
  var field;

  if (brack == "()" || brack == "") field = "(";

  if (brack == "[]") field = "[";

  for (var j = 0; j < size; j++) {
    if (brack == "") {
      if (pcs[j] == 10) field += "T";

      if (pcs[j] == 11) field += "E";

      if (pcs[j] < 10) field += pcs[j];
    }

    if (brack != "" && (pcs[j] != 10 || pcs[j] != 11)) field += pcs[j];

    if (j != size - 1 && brack != "") field += ",";
  }

  if (brack == "" || brack == "()") field += ")";

  if (brack == "[]") field += "]";

  return field;
}

// Returns the normal form, by returning an array.

// "pcs" is an integer array of pcs

// "size" is the cardinality of "pcs"

function getNorm(pcs, size) {
  pcs.sort(compare); //Sorts from lowest to highest

  var norm_can = new Array();

  norm_can[0] = new Array();

  norm_can[0] = pcs;

  //document.write(pcs + "<BR>");

  for (
    var i = 1;
    i < size;
    i++ //This will produce all the normal form choices
  ) {
    norm_can[i] = new Array();

    for (j = 0; j < size; j++) {
      if (j == size - 1) norm_can[i][j] = norm_can[i - 1][0];
      else norm_can[i][j] = norm_can[i - 1][j + 1];
    }
  }

  //Lets pick the best choice.

  var winner = norm_can[0];

  for (i = 1; i < size; i++) {
    //document.write("Compare " + winner + " and " + norm_can[i]);

    winner = compareNormCan(winner, norm_can[i], size);

    //document.write(" The winner is " + winner + "<BR>");
  }

  return winner;
}

// set1 and set2 are arrays. Returns the best normal form candidate

// (see above function for how it is used).

function compareNormCan(set1, set2, size) {
  is_diff = false;

  i = size - 1;

  while (is_diff == false) {
    diff1 = mod_12_sub(parseInt(set1[i]), parseInt(set1[0]));

    diff2 = mod_12_sub(parseInt(set2[i]), parseInt(set2[0]));

    if (diff1 == diff2) {
      if (i == 1) {
        if (set1[0] < set2[0]) return set1;
        else return set2;
      } else is_diff = false;
    }

    if (diff1 < diff2) return set1;

    if (diff1 > diff2) return set2;

    i--;
  }

  return 0;

  // this line is necessary or netscape 4.0 complains that the function doesn't

  // always return a value
}

// Returns the prime form.  norm is the normal form of the set.

// size is its cardinality.

function getPrime(norm, size) {
  if (size == 2) {
    var prime = new Array();

    prime[0] = 0;

    temp = mod_12_sub(norm[1], norm[0]);

    if (temp > 6) prime[1] = 12 - temp;
    else prime[1] = temp;

    return prime;
  }

  size = size - 1;

  /* This is the size of the interval array. ex. For the set
  
      [10,11,2,6] size would be three because the intervals are 1,3,4.  1,3,4
  
      would be the value of "intervals"*/

  inverse = normInverse(norm, size + 1);

  // Sets inverse equal to the normal form of the inverse of "norm".

  choice = compareNormCan(norm, inverse, size);

  /* This works because you use the same process to compare normal form
  
      canditates as when you compare the normal form of your set to the inversion
  
      of your set (which is also put in normal form).  The "winner" is the set
  
      packed from the right.  The
  
      "winner" has the intervals between each number converted into the array
  
      called intervals. */

  var intervals = new Array(size);

  for (i = 0; i < size; i++) {
    intervals[i] = mod_12_sub(parseInt(choice[i + 1]), parseInt(choice[i]));
  }

  return getPrime1(intervals, size);

  // Builds a set starting on 0 using "intervals"
}

// Returns the prime form.  intervals is the interval array mentioned above.

// This function is only used inside getPrime(). size is the size of the

// interval array (ie. (cardinality of the set) - 1)

function getPrime1(intervals, size) {
  var prime = new Array(size + 1);

  prime[0] = 0;

  for (i = 1; i <= size; i++) prime[i] = prime[i - 1] + intervals[i - 1];

  return prime;
}

// Returns the normal form of the inverse of "norm".  "size" is the cardinality

// of the set. Used only inside getPrime().

function normInverse(norm, size) {
  var inverse = new Array(size);

  for (i = 0; i < size; i++) inverse[i] = 12 - norm[i];

  return getNorm(inverse, size);
}

//for sorting, see getNorm

function compare(a, b) {
  return a - b;
}

// pc_a and pc_b are integers.  Returns the difference between

// two modulo 12 numbers. (pc_a - pc_b)

function mod_12_sub(pc_a, pc_b) {
  if (pc_a < pc_b) return 12 + pc_a - pc_b;
  else return pc_a - pc_b;
}

// pc_a and pc_b are integers.  Returns the sum of two modulo 12 numbers.

// (pc_a + pc_b)

function mod_12_add(pc_a, pc_b) {
  temp = pc_a + pc_b;

  if (temp > 11) return temp - 12;
  else return temp;
}

// displays the forte name of "primeForm" in the "forte" field. "primeForm" is a

// string of numbers separated by commas.

// size is the cardinality of "primeForm"

// chord is the list of chords  of a given "size" from the huge two-dimensional

// array in main().

function displayForte(primeForm, form, size, chord) {
  if (size > 9 || size < 3) {
    form.forte.value = "There is no Forte name.";

    return;
  }

  if (size < 3) {
    /* There is actually no way to get to this line of code because the main function returns before it even gets to this point if size < 3.  I just included it for completeness and in case anyone else wants to use this function for their own purpose. */

    form.forte.value = "";

    return;
  }

  for (i = 0; i < chord.length; i++) {
    if (primeForm == chord[i][1]) form.forte.value = chord[i][0];
  }
}

// returns the forte name of the Z-mate of the "primeForm" (which is an integer

// array).  Returns "None" if there isn't one.

// "chord" is the list of chords  of a given "size" from the huge two-dimensional

// array in main().  size is the cardinality

function ZMate(primeForm, chord, size) {
  var iVector = new Array();

  for (i = 0; i < 7; i++) iVector[i] = 0;

  iVector = icVector(primeForm, iVector, size, 0, 1);

  var zMate_candidate; // Prime form of Z-mate candidate

  var candidateVector = new Array();

  var count; // see third for-loop below.

  for (var i = 0; i < chord.length; i++) {
    count = 0;

    zMate_candidate = convertToArray(chord[i][1]);

    for (j = 0; j < 7; j++) candidateVector[j] = 0;

    candidateVector = icVector(zMate_candidate, candidateVector, size, 0, 1);

    if (
      areArraysEqual(candidateVector, iVector) &&
      !areArraysEqual(primeForm, zMate_candidate)
    )
      return chord[i][0];
  }

  return "None";
}

// converts the "pf" string (from the huge two-dimensional array in the main()

// function) to an integer array.

function convertToArray(pf) {
  pf = pf.split(",");

  for (var i = 0; i < pf.length; i++) pf[i] = parseInt(pf[i]);

  return pf;
}

// Compares two arrays (a and b) of equal length.  Returns true is they are

// equal, otherwise it returns false.  "==" doesn't seem to work right, so this

// function is necesary.

function areArraysEqual(a, b) {
  var count = 0;

  for (i = 0; i < a.length; i++) {
    if (a[i] == b[i]) count++;
  }

  if (count == a.length) return true;
  else return false;
}

// Transposes the "normalForm" by the given "amount".  "size" is the cardinality

function transposeSet(normalForm, size, amount) {
  var new_set = new Array(size);

  for (i = 0; i < size; i++)
    new_set[i] = mod_12_add(parseInt(normalForm[i]), parseInt(amount));

  new_set = getNorm(new_set, size);

  // for sets like the whole tone scale, the set will most likely not be in

  // normal form, so I had to add the above function call.

  return new_set;
}

// Inverts the "normalForm" by the given "amount".  "size" is the cardinality

function invertSet(normalForm, size, amount) {
  var new_set = new Array(size);

  new_set = transposeSet(normInverse(normalForm, size), size, amount);

  new_set = getNorm(new_set, size);

  /* for sets like the whole tone scale, the set will most likely not be in normal form, so I had to add the above function call. */

  return new_set;
}

// Returns, as an array, the ic vector of a prime form.

// When called, it must set vector = 0000000, i = 0, and j = 1 because this

// function is recursive (ie. it calls itself) and needs default values to start

// with.  primeForm is an array. Size is from 3 to 9, ie. the cardinality

// It returns an array in which you must ignore the first element, so the array

// really starts at index 1.  This eliminates the confusion of calling array

// index 0 as ic 1.

function icVector(primeForm, vector, size, i, j) {
  var temp;

  // to make it easier to read, I'm starting the array on 1, not 0.

  temp = primeForm[j] - primeForm[i];

  switch (temp) {
    case 1:

    case 11:
      vector[1]++;

      break;

    case 2:

    case 10:
      vector[2]++;

      break;

    case 3:

    case 9:
      vector[3]++;

      break;

    case 4:

    case 8:
      vector[4]++;

      break;

    case 5:

    case 7:
      vector[5]++;

      break;

    case 6:
      vector[6]++;

      break;
  }

  if (j == size - 1) {
    i++;

    j = i;
  }

  if (i == size - 1) {
    return vector;
  }

  j++;

  return icVector(primeForm, vector, size, i, j);
}

// Displays the ic vector in the correct field.  Vector is an array of elements

// [1]-[6]. Elements [0] = 0 and is ignored

function displayIcVector(form, vector) {
  form.icVector.value = vector[1];

  for (i = 2; i < 7; i++) form.icVector.value += vector[i];
}

// This function displays, in a text field, the values of n in which

// transpositional invariance occurs.  The normal form for this function must be

// used and NOT the prime form.

// There is a line commented out that would return the number of times the set

// is transpositionally invariant.  But to include it would be a little

// redundant.

// normalForm is an array

// size is the cardinality of normalForm

function getTransInvariance(form, normalForm, size) {
  var count = 0;

  form.transN.value = "";

  var transposed;

  for (var i = 0; i < 12; i++) {
    transposed = transposeSet(normalForm, size, i);

    if (areArraysEqual(transposed, normalForm)) {
      if (count != 0) form.transN.value += ", ";

      form.transN.value += i;

      count++;
    }
  }

  //return count;
}

// This function displays, in a text field, the values of n in which inversional

// invariance occurs.  The normal form for this function must be

// used and NOT the prime form.

// There is a line commented out that would return the number of times the set

// is transpositionally invariant.  But to include it would be a little

// redundant.

// normalForm is an array

// size is the cardinality of normalForm

function getInvertInvariance(form, normalForm, size) {
  var count = 0;

  form.invertN.value = "";

  var inverted;

  for (var i = 0; i < 12; i++) {
    inverted = invertSet(normalForm, size, i);

    if (areArraysEqual(inverted, normalForm)) {
      if (count != 0) form.invertN.value += ", ";

      form.invertN.value += i;

      count++;
    }
  }

  // return count;
}

// displays, in textfields, a T or I-matrix for the normal form of the set.

// Also, the y-axis may be inverted

// form: the form containing the matrix text fields

// normalForm: as an array of integers

// startingIndex: the index number of the form element at the top left corner

// of the matrix.

function displayMatrix(form, normalForm, startingIndex) {
  var ySet = new Array();

  clearMatrix(form, normalForm.length, startingIndex);

  switch (form.matrixOptions.options[form.matrixOptions.selectedIndex].value) {
    case "t":
      ySet = normalForm;

      break;

    case "t_invert":
      ySet = invertSet(normalForm, normalForm.length, 0);

      break;

    case "i":
      ySet = normalForm;

      break;

    case "i_invert":
      ySet = invertSet(normalForm, normalForm.length, 0);

      break;

    case "default":
      clearMatrix(form, normalForm.length, startingIndex);

      return;

      break;

    default:
      alert("something's wrong");
  }

  displayX(normalForm, form, startingIndex);

  displayY(ySet, form, startingIndex);

  displayMatrixResults(normalForm, ySet, form, startingIndex);
}

// displays the normal form along the x-axis of the matrix.

// normalForm: as an array of integers

// startingIndex: the index number of the form element at the top left corner

// of the matrix.

function displayX(normalForm, form, startingIndex) {
  var j = 0;

  for (var i = startingIndex + 1; j < normalForm.length; i++) {
    form.elements[i].value = normalForm[j];

    j++;
  }
}

// displays the normal form along the x-axis of the matrix.

// ySet: the set along the y-axis (ie. either the normal form or its inverse)

// startingIndex: the index number of the form element at the top left corner

// of the matrix.

function displayY(ySet, form, startingIndex) {
  var j = 0; // ySet index

  for (var i = startingIndex + 10; j < ySet.length; i += 10) {
    form.elements[i].value = ySet[j];

    j++;
  }
}

// displays the Matrix results

// normalForm: as an array of integers

// ySet: the set along the y-axis (ie. either the normal form or its inverse)

// startingIndex: the index number of the form element at the top left corner

// of the matrix.

function displayMatrixResults(normalForm, ySet, form, startingIndex) {
  var k = 11 + startingIndex;

  var temp = 10 - normalForm.length; // See a few lines below

  for (var j = 0; j < ySet.length; j++) {
    for (var i = 0; i < normalForm.length; i++) {
      if (
        form.matrixOptions.value == "t" ||
        form.matrixOptions.value == "t_invert"
      )
        form.elements[k].value = mod_12_sub(normalForm[i], ySet[j]);
      else form.elements[k].value = mod_12_add(normalForm[i], ySet[j]);

      k++;
    }

    k += temp; // brings us to the next row;
  }
}

// Clears the text fields of the matrix that are left over from a previous

// calculation

// For example, if the previous set the user types in is a pentachord and the

// next one

// is a trichord, this function will clear cells 4 and 5 in the first three rows

// length: normalForm.length, where normalForm is an array.

// startingIndex: the index number of the form element at the top left corner

// of the matrix.

function clearMatrix(form, length, startingIndex) {
  if (form.elements[startingIndex + 1].value == "") return; // Matrix is already cleared!

  if (length > 9) {
    for (var i = startingIndex; i < startingIndex + 100; i++) {
      form.elements[i].value = "";
    }

    return;
  }

  var temp = startingIndex + 9;

  // temp is the index of the last number of the first row of the previous set

  while (form.elements[temp].value == "") temp--;

  var formerSetLength = temp - startingIndex;

  // "formerSetLength is the length of the previous set entered by the

  // user

  if (length >= formerSetLength) return; // Nothing to do!

  // This loop clears everything to the right of the new matrix.

  for (
    var i = startingIndex + length + 1;
    i <= startingIndex + length + 1 + length * 10;
    i += 10
  ) {
    for (var j = i; form.elements[j].value != ""; j++)
      form.elements[j].value = "";
  }

  j = i;

  // This loop clears everything below the new matrix.

  for (var i = j - length - 1; form.elements[i].value != ""; i += 10) {
    for (var j = i; form.elements[j].value != ""; j++)
      form.elements[j].value = "";
  }
}

// Displays the number of subsets of a given cardinality, according to Forte

// name.

// "chords" must come from the two-dimensional array (ex. all the septachords)

// primeForm: the prime form as an array

// subSize = cardinality of the subset

function getSubsets(chords, primeForm, subSize, form) {
  var subset_i = new Array();

  // subset_i is the array of indexes that are picked out from primeForm.

  // For example, if subset_i = (0,1,3) and primeForm = (0,2,3,4,5), then

  // subset would be (0,2,4)

  for (var i = 0; i < subSize; i++) subset_i[i] = i;

  var subset;

  var cont = true; // Couldn't use the keyword "continue" as a variable!

  var forteList = new Array();

  // Listing of every occurance of a subset Forte name

  var i = 0;

  while (cont == true) {
    subset = getPcs(subset_i, primeForm);

    subset = getNorm(subset, subSize);

    subset = getPrime(subset, subSize);

    forteList[i] = getForte(subset, chords);

    subset_i = nextSub_Superset(subset_i, primeForm.length);

    if (subset_i == "done") {
      cont = false;
    }

    i++;
  }

  var tally = searchList(forteList, chords);

  // tally is a parallel array of numbers that correspond to the chords array.

  // For example if chords = trichords, tally[1] (we skip 0) is the number of

  // occurances of set 3-1 as a subset.

  displaySubsetData(tally, form, chords);
}

// Returns the next value of set_i (see above function).

// When the last one has been reached, it returns "done"

function nextSub_Superset(set_i, primeSize) {
  size = set_i.length;

  if (set_i[size - 1] == primeSize - 1) {
    if (set_i[0] == primeSize - size) return "done";

    for (var i = 0; i < size; i++) {
      if (primeSize - size == set_i[i] - i) {
        // That is, the number at index 'i' should not go any higher

        // For example, if subSize = 4, primeSize = 6, and subset_i[3]

        // = 5, we must do the following:

        set_i[i - 1]++;

        for (var i = i; i < size; i++) set_i[i] = set_i[i - 1] + 1;

        return set_i;
      }
    }
  } else {
    set_i[size - 1]++;

    return set_i;
  }
}

// Displays the number of supersets of a given cardinality, according to Forte

// name.

// "chords" must come from the two-dimensional array (ex. all the septachords)

// primeForm: the prime form as an array

// subSize = cardinality of the superset

function getSupersets(chords, primeForm, superSize, form) {
  var superset;

  var cont = true; // Couldn't use the keyword "continue" as a variable!

  var forteList = new Array();

  // Listing of every occurance of a superset Forte name

  var i = 0;

  var found;

  var allSuperPcs = new Array();

  // all the pcs that can be added to primeForm

  var superPcs = new Array();

  // Pcs added to primeForm.  These are extracted from allSuperPcs.

  var k = -1; // index for superPcs;

  for (var i = 0; i < 12; i++) {
    found = false;

    for (var j = 0; j < primeForm.length; j++) {
      if (primeForm[j] == i) found = true;
    }

    if (found == false) {
      k++;

      allSuperPcs[k] = i;
    }
  }

  var superset_i = new Array();

  // superset_i is the array of indexes that are picked out from allSuperPcs.

  // For example, if subset_i = (0,3) and primeForm = (0,3,4), then

  // superset would be (0,1,3,4,6)

  for (var i = 0; i < superSize - primeForm.length; i++) superset_i[i] = i;

  i = 0;

  while (cont == true) {
    superPcs = getPcs(superset_i, allSuperPcs);

    superset = primeForm.concat(superPcs);

    superset = getNorm(superset, superSize);

    superset = getPrime(superset, superSize);

    forteList[i] = getForte(superset, chords);

    superset_i = nextSub_Superset(superset_i, allSuperPcs.length);

    if (superset_i == "done") {
      cont = false;
    }

    i++;
  }

  var tally = searchList(forteList, chords);

  // tally is a parallel array of numbers that correspond to the chords array.

  // For example if chords = trichords, tally[1] (we skip 0) is the number of

  // occurances of set 3-1 as a subset.

  displaySupersetData(tally, form, chords);
}

// Returns the Forte name of the primeForm given.  "chords" is the cardinality

// of the "primeForm", taken from the huge two-dimensional array in main()

// "primeForm" is an array.

function getForte(primeForm, chords) {
  for (i = 0; i < chords.length; i++) {
    if (primeForm == chords[i][1]) return chords[i][0];
  }

  return 0;

  // this line is necessary or netscape 4.0 complains that the function doesn't

  // always return a value
}

// Returns an array of numbers that correspond to the chords array.

// For example, if chords = pentachords and tally is the array returned, then

// tally[1] (we skip 0) is the number of occurances of set 5-1 as a subset/superset.

// "forteList" is the list of forte names that are subsets or supersets of

// a given set.

function searchList(forteList, chords) {
  var tally = new Array();

  var temp = new Array();

  for (var i = 0; i < chords.length + 1; i++)
    // "+ 1" is necessary because tally begins at index 1

    tally[i] = 0;

  for (
    var i = 0;
    i < forteList.length;
    i++ // (ie. tally[0] always equals 0).
  ) {
    forteList[i] = forteList[i].replace("z", "");

    temp = forteList[i].split("-");

    tally[temp[1]]++;
  }

  return tally;
}

// displays in form.subResults.value the number of subsets there

// are for a given set, according to Forte name.

// chords is the list of chords of one cardinality from the huge

// two-dimensional array in main().

// tally is a parallel array of numbers that correspond to the chords array.

// For example, if chords = trichords, tally[1] (we skip 0) is the number of

// occurances of set 3-1 as a subset.

function displaySubsetData(tally, form, chords) {
  form.subResults.value = "";

  for (var i = 1; i < tally.length; i++) {
    if (tally[i] != 0)
      form.subResults.value += chords[i - 1][0] + ": " + tally[i] + "\n";
  }
}

// displays in form.superResults.value the number of supersets there

// are for a given set, according to Forte name.

// chords is the list of chords of one cardinality from the huge

// two-dimensional array in main().

// tally is a parallel array of numbers that correspond to the chords array.

// For example if chords = trichords, tally[1] (we skip 0) is the number of

// occurances of set 3-1 as a subset.

function displaySupersetData(tally, form, chords) {
  form.superResults.value = "";

  for (var i = 1; i < tally.length; i++) {
    if (tally[i] != 0)
      form.superResults.value += chords[i - 1][0] + ": " + tally[i] + "\n";
  }
}

// Returns the pitch classes extracted from "pcs" according to "set_i".

// For example for set_i = (0,1,3) and pcs = (1,3,7,9), the function will

// return (1,7,9)

function getPcs(set_i, pcs) {
  var temp = new Array();

  for (var i = 0; i < set_i.length; i++) temp[i] = pcs[set_i[i]];

  return temp;
}

// gets the complement of the set checked off in "form" and calls

// allCheckboxestoTextandMain

function getComplement(form) {
  for (var i = 0; i < 12; i++) {
    if (form.elements[i].checked == true) form.elements[i].checked = false;
    else form.elements[i].checked = true;
  }

  allCheckboxestoTextAndMain(form);
}

// gets the inverse of the set checked off in "form" and calls

// allCheckboxestoTextandMain

function getInvert(form) {
  var pcs = new Array();

  var j = -1; // index for pcs

  for (var i = 0; i < 12; i++) {
    if (form.elements[i].checked == true) {
      j++;

      pcs[j] = 12 - i;
    }
  }

  for (var i = 0; i < 12; i++) {
    if (form.elements[i].checked == true) form.elements[i].checked = false;
  }

  for (j = 0; j < pcs.length; j++) form.elements[pcs[j]].checked = true;

  allCheckboxestoTextAndMain(form);
}

// this function is called when the user clicks submit after entering a set

// by typing numbers or clicking checkboxes.  This is necessary because Netscape

// up to version 4.x won't allow the user to hit enter to start the

// calculations.
function submitSet(form) {

  scanField(form);
  allCheckboxestoText(form);
  main(form, false);
  updatecal(form);
  setLink(form);


}

// function resetSubmission() {
//     isSubmitted = false; // Reset the flag
// }

function setLink(form) {
  form.solomonName.value = solomonName;
  document.getElementById("open-link").addEventListener("click", () => {
    window.open(url, "_blank");
  });
}

function setLink(form) {
  const solomonValue = form.solomon.value;

  // Remove "B" from solomonCode if it exists
  let cleanSolomonValue = solomonValue.replace("B", "");

  // Find the matching object, first trying with "B" and then without if no match
  let newObj = solomonlist.find((obj) => obj.solomonCode == solomonValue);

  // If the exact "B" value isn't found, try without "B"
  if (!newObj) {
    newObj = solomonlist.find((obj) => obj.solomonCode == cleanSolomonValue);
  }

  if (!newObj) return; // Exit if no matching object is found

  // Find the Name
  let solomonName = newObj.name;
  console.log("SOLOMON NAME : " , solomonName);

  if (newObj && newObj.link) {
    let url = newObj.link;

    // Check if the URL starts with 'http://' or 'https://'
    if (!/^https?:\/\//i.test(url)) {
      // Prepend 'https://' if missing
      url = "https://" + url;
    }

    // Update the form field
    form.solomonName.value = solomonName;

    // Get the button element
    const openLinkButton = document.getElementById("open-link");

    // Create a new function that opens the URL
    const openUrl = () => {
      window.open(url, "_blank");
    };

    // Use a closure to bind the current URL to the event handler
    openLinkButton.onclick = openUrl;

    console.log("New OBJ: ", newObj);
    console.log("Updated URL: ", url); // Log the updated URL
  } else {
    console.error("No link available");
  }
}

function playAudioInBg() {
  let solomonV = document.getElementById("solomonV").value;
  var audio = new Audio(`./audios/${solomonV}.mp3`);

  audio
    .play()
    .then(() => {
      console.log("Background audio is playing");
    })
    .catch((error) => {
      console.error("Audio playback failed:", error);
    });
}

function changeinterval(spaceremove) {
  var interval = new Array();
  for (var i = 0; i < spaceremove.length; i++) {
    if (i == spaceremove.length - 1) {
      if (parseInt(spaceremove[i]) > parseInt(spaceremove[0])) {
        interval[i] = 12 - parseInt(spaceremove[i]) + parseInt(spaceremove[0]);
      } else {
        interval[i] = parseInt(spaceremove[0]) - parseInt(spaceremove[i]);
      }
    } else {
      if (parseInt(spaceremove[i]) > parseInt(spaceremove[i + 1])) {
        interval[i] =
          12 - parseInt(spaceremove[i]) + parseInt(spaceremove[i + 1]);
      } else {
        interval[i] = parseInt(spaceremove[i + 1]) - parseInt(spaceremove[i]);
      }
    }
  }
  return interval;
}

/*function varients(interval){
    
      var tempvari=interval[0]-3;	
      for (var i = 0; i < interval.length-1; i++){
          interval[i+1]=parseInt(interval[i]);
      }
      
      return interval;
      
  }*/

/*function varients(interval){
     var interval4= new Array();
     var tempinterval=interval[0]-3;	
      
     for (var i = 0; i < interval.length-1; i++){
          interval4[i+1]=interval[i];		
      }
      
      interval4[0]=tempinterval;
  
       for (var i = 1; i < interval4.length; i++){
          interval4[i]=parseInt(interval4[i-1])+parseInt(interval4[i]);	
      }
      return interval4;
  }*/

function isEqual(a, b) {
  return a.join() == b.join();
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (parseInt(arr1[i]) !== parseInt(arr2[i])) return false;
  }
  return true;
}

function check_clockwise_rotation(prime_arr, inter_arr) {
  if (prime_arr.length !== inter_arr.length) return false;
  var previous_match = -1;
  var index_no_first = 0;
  var k = -2;
  for (let i = 0; i < prime_arr.length; i++) {
    if (i == prime_arr.length - 1) {
      previous_match = -1;
    }

    for (let j = 0; j < inter_arr.length; j++) {
      if (parseInt(prime_arr[i]) === parseInt(inter_arr[j])) {
        var k = j;
        if (j > previous_match) {
          var k = j;
          break;
        }
      }
    }

    if (k < previous_match) {
      return false;
    }
    previous_match = k;
  }
  return true;
}

function updatecal(form) {
  var spaceremove = new Array();
  field = form.yourSet.value;

  var j = 0;
  for (var i = 0; i < field.length; i++) {
    if (field[i] != " ") {
      if (field[i] == "t") {
        spaceremove[j] = 10;
        j = j + 1;
      } else if (field[i] == "e") {
        spaceremove[j] = 11;
        j = j + 1;
      } else {
        spaceremove[j] = field[i];
        j = j + 1;
      }
    }
  }

  


  
  var interval = changeinterval(spaceremove);

  //var prime_value=convertToArray(form.prime.value.substring(form.prime.value.indexOf("(")+1,form.prime.value.lastIndexOf(")")));
  var prime_value_new = new Array();
  var prime_value = form.prime.value.substring(
    form.prime.value.indexOf("[") + 1,
    form.prime.value.lastIndexOf("]")
  );

 
  var j = 0;
  for (var i = 0; i < prime_value.length; i++) {
    if (prime_value[i] != ",") {
      if (prime_value[i] == "t") {
        prime_value_new[j] = 10;
        j = j + 1;
      } else if (field[i] == "e") {
        prime_value_new[j] = 11;
        j = j + 1;
      } else {
        prime_value_new[j] = prime_value[i];
        j = j + 1;
      }
    }
  }

  var primestring = "";
// Initialize as an array

for (var i = 0; i < prime_value.length; i++) {
  primestring += String(prime_value[i]); // Append each number as string
}

var spaceremovestring = "";
// Initialize as an array

for (var i = 0; i < spaceremove.length; i++) {
  if(i == spaceremove.length-1){
    spaceremovestring += String(spaceremove[i]); // Append each number as string
  }
  else spaceremovestring += String(spaceremove[i])+','; // Append each number as string
}



var string1 = generaterotation(primestring);
var string2 = generaterotation(spaceremovestring);

alert(string1);
alert(string2);

if(string1 == string2){
  form.solomon.value = form.forte.value + "B";
}
else form.solomon.value = form.forte.value;
//alert(res);

  

  


  // if (arraysEqual(interval, prime_value_new) == true) {
  //   console.log("s" + interval);
  //   console.log("t" + prime_value_new);
  //   form.solomon.value = form.forte.value;
  // } else if (
  //   check_clockwise_rotation(prime_value_new_interval, interval) == false
  // ) {
  //   form.solomon.value = form.forte.value + "B";
  // } else if (arraysEqual(interval, prime_value_new_interval) == true) {
  //   console.log("u" + interval);
  //   console.log("v" + prime_value_new_interval);
  //   form.solomon.value = form.forte.value;
  // } else {
  //   var diffpermutation = permute(interval);

  //   var k = 0;

  //   for (var i = 0; i < diffpermutation.length; i++) {
  //     console.log(diffpermutation[i]);
  //     console.log(prime_value_new_interval);
  //     if (arraysEqual(diffpermutation[i], prime_value_new_interval) == true) {
  //       form.solomon.value = form.forte.value;
  //       k = 1;
  //       break;
  //     }
  //   }
  //   if (k == 0) {
  //     form.solomon.value = form.forte.value + "B";
  //   }
  // }
}

function generaterotation (userSetInput) {
  //alert(userSetInput);
  let checkedNumbers = userSetInput.trim().split(',').map(Number);
  
  // Sort the selected numbers
  checkedNumbers.sort((a, b) => a - b);
 
  const differences = [];
  for (let i = 0; i < checkedNumbers.length; i++) {
      const nextIndex = (i + 1) % checkedNumbers.length;
      let diff = checkedNumbers[nextIndex] - checkedNumbers[i];
      if (diff < 0) diff += 12;
      differences.push(diff);
  }

  const seqset = differences.join(' ');
  const calculatedPermutations = generatePermutations(differences);
  
  const rotationvalue = calculatedPermutations.map(p => p.join(' ')).join(', ');
  
 
  return rotationvalue;
}

function generatePermutations(arr) {
  const permutations = [];
  for (let i = 0; i < arr.length; i++) {
      permutations.push(arr.slice(i).concat(arr.slice(0, i)));
  }
  return permutations;
}

function swap(array, i, j) {
  if (i != j) {
    var swap = array[i];
    array[i] = array[j];
    array[j] = swap;
  }
}

function permute_rec(res, str, array) {
  if (array.length == 0) {
    res.push(str);
  } else {
    for (var i = 0; i < array.length; i++) {
      swap(array, 0, i);
      permute_rec(res, str + array[0], array.slice(1));
      swap(array, 0, i);
    }
  }
}

function permute(array) {
  var res = [];

  permute_rec(res, "", array);
  return res;
}

//console.log(permute(["A", "B", "C"]));

// The following three functions are adapted from Danny Goodman's

// the Javascript Bible, 2nd edition, page 677

// returns true if enter/return has been pressed, otherwise it returns false.

function isEnterKey(evt) {
  if (!evt) {
    // grab IE event object

    evt = window.event;
  } else if (!evt.keyCode) {
    // grab NN4 event info

    evt.keyCode = evt.which;
  }

  return evt.keyCode == 13 || evt.keyCode == 3;

  // though I don't know if the pc is like this, the enter key

  // in the bottom right corner of a mac keyboard is key code 3,

  // not 13, at least in Netscape 4.x.
}

// this function is called when the user hits enter/return after entering a set

// by typing numbers or clicking checkboxes. This only works in Internet

// Explorer and Netscape 6.x

function yourSetOnEnter(form, evt) {
  if (isEnterKey(evt)) {
    scanField(form);

    allCheckboxestoText(form);

    main(form, false);

    return false;
  }

  return true;
}

// this function is called when the user hits enter/return after entering the

// forte name.  This only works in Internet Explorer and Netscape 6.x

function forteOnEnter(form, evt, forteEntered) {
  if (isEnterKey(evt)) {
    main(form, forteEntered);

    return false;
  }

  return true;
}

// Checks off the box in form.elements[index] when the user clicks on a note

// on keyboard.gif.  Assumes that the first 12 elements of the form are the

// 12 pc check boxes

function keyToText(form, index) {
  if (document.forms[0].elements[index].checked == true) {
    document.forms[0].elements[index].checked = false;

    if (index < 10)
      form.yourSet.value = form.yourSet.value.replace(index + " ", "");

    if (index == 10) form.yourSet.value = form.yourSet.value.replace("t ", "");

    if (index == 11) form.yourSet.value = form.yourSet.value.replace("e ", "");
  } else {
    document.forms[0].elements[index].checked = true;

    if (index < 10) form.yourSet.value += index + " ";

    if (index == 10) form.yourSet.value += "t ";

    if (index == 11) form.yourSet.value += "e ";
  }

  document.forms[0].yourSet.focus();
}

// records the checked pc (index is the index of the checked pc) in the

// "yourSet" field and sets the focus to "yourSet" so that the user (if they

// are using Internet Explorer or Netscape 6.x) can hit enter to start the

// calculations.  Assumes that the first 12 elements of the form are the

// 12 pc check boxes

function checkboxToText(form, index) {
  if (document.forms[0].elements[index].checked == false) {
    if (index < 10)
      form.yourSet.value = form.yourSet.value.replace(index + " ", "");

    if (index == 10) form.yourSet.value = form.yourSet.value.replace("t ", "");

    if (index == 11) form.yourSet.value = form.yourSet.value.replace("e ", "");
  } else {
    if (index < 10) form.yourSet.value += index + " ";

    if (index == 10) form.yourSet.value += "t ";

    if (index == 11) form.yourSet.value += "e ";
  }

  document.forms[0].yourSet.focus();
}

function check(index) {
  if (document.forms[0].elements[index].checked == true)
    document.forms[0].elements[index].checked = false;
  else document.forms[0].elements[index].checked = true;
}

// called by the onLoad event handler, this resets all form elements and sets

// the focus to the "yourSet" field.

function resetAndFocus() {
  document.forms[0].reset();
  document.forms[0].yourSet.focus();
}

// Initialize a Set to store unique selected values and prevent duplicate "0"
const selectedValuesSet = new Set();

function selectCheckbox(value) {
  // Get the checkbox element by ID if it exists
  const checkbox = document.getElementById(`checkbox-${value}`);

  // Toggle the value in the Set (add if not present, remove if present)
  if (selectedValuesSet.has(value)) {
    selectedValuesSet.delete(value); // Remove value if it's already selected

    // Uncheck the checkbox if it exists
    if (checkbox) {
      checkbox.checked = false;
    }

    // Remove gray-out effect from the selected box
    document
      .querySelectorAll(
        ".guitar-box-one-inner, .guitar-box-two-inner, .guitar-box-three-inner, .guitar-box-four-inner, .guitar-box-five-inner, .guitar-box-six-inner"
      )
      .forEach((box) => {
        if (box.textContent === String(value)) {
          box.classList.remove("selected-highlight");
        }
      });
  } else {
    // Prevent duplicate "0"
    if (value !== 0 || !selectedValuesSet.has(0)) {
      selectedValuesSet.add(value); // Add value to Set

      // Check the checkbox if it exists
      if (checkbox) {
        checkbox.checked = true;
      }

      // Apply gray-out effect to the selected box
      document
        .querySelectorAll(
          ".guitar-box-one-inner, .guitar-box-two-inner, .guitar-box-three-inner, .guitar-box-four-inner, .guitar-box-five-inner, .guitar-box-six-inner"
        )
        .forEach((box) => {
          if (box.textContent === String(value)) {
            box.classList.add("selected-highlight");
          }
        });
    }
  }

  // Map selected values for display in the input field
  const selectedValues = Array.from(selectedValuesSet)
    .map((val) => {
      if (val === 10) return "t"; // Special case for checkbox 10
      if (val === 11) return "e"; // Special case for checkbox 11
      return val; // Default case
    })
    .join(" ");

  // Update the input field with selected values
  const inputField = document.querySelector("input[name='yourSet']");
  if (inputField) {
    inputField.value = selectedValues;
  } else {
    console.warn("Input field with name 'yourSet' not found");
  }

  // Log to verify selected values
  console.log("Selected Values:", selectedValues);
}

// Optional: Reset the guitar display and clear selections
function resetGuitarDisplay() {
  // Remove the highlight from all boxes
  document
    .querySelectorAll(".selected-highlight")
    .forEach((box) => box.classList.remove("selected-highlight"));

  // Clear the Set and input field
  selectedValuesSet.clear();
  const inputField = document.querySelector("input[name='yourSet']");
  if (inputField) {
    inputField.value = "";
  }
}

// Initially, guitar view hidden hoga
// document.querySelector(".show-guitar").style.display = "none";

function switchInstrument(event, button) {
  event.preventDefault();

  if (button.innerHTML === "Guitar") {
    button.innerHTML = "Piano";
    document.querySelector(".show-piaono").style.display = "none"; // Show Piano
    document.querySelector(".show-guitar").style.display = "block"; // Hide Guitar
  } else {
    button.innerHTML = "Guitar";
    document.querySelector(".show-guitar").style.display = "none"; // Show Guitar
    document.querySelector(".show-piaono").style.display = "block"; // Hide Piano
  }
}

// Define the function to open the file in another tab
function openFileInNewTab(filePath) {
  window.open(filePath, "_blank");
}

// Bind the function to the button click event
// document
//   .getElementById("downloadButtonbooka")
//   .addEventListener("click", function () {
//     // Specify the file path
//     var filePath = "Downloads.html"; // Change this to your file path
//     openFileInNewTab(filePath);
//   });

// Get the button element
var button = document.getElementById("downloadButtonbooka");

// Function to change the button size
function changeButtonSize(width, height) {
  button.style.width = width;
  button.style.height = height;
}

// Example: Change button size to 150px width and 50px height
changeButtonSize("70px", "40px");
function changeButtonTextSize(buttonId, textSize) {
  var button = document.getElementById(buttonId);
  button.style.fontSize = textSize;
}

// Example: Change the button text size to 24px
changeButtonTextSize("downloadButtonbooka", "10px");

// Define the function to open the file in another tab
function openFileInNewTab(filePath) {
  window.open(filePath, "_blank");
}

// Bind the function to the button click event
// document
//   .getElementById("downloadButtonbookab")
//   .addEventListener("click", function () {
//     // Specify the file path
//     var filePath = "Instructions.html"; // Change this to your file path
//     openFileInNewTab(filePath);
//   });

// Get the button element
var button = document.getElementById("downloadButtonbookab");

// Function to change the button size
function changeButtonSize(width, height) {
  button.style.width = width;
  button.style.height = height;
}

// Example: Change button size to 150px width and 50px height
changeButtonSize("50px", "40px");
function changeButtonTextSize(buttonId, textSize) {
  var button = document.getElementById(buttonId);
  button.style.fontSize = textSize;
}

// Example: Change the button text size to 24px
changeButtonTextSize("downloadButtonbookab", "10px");

// Define the function to open the file in another tab
function openFileInNewTab(filePath) {
  window.open(filePath, "_blank");
}

// Bind the function to the button click event
// document
//   .getElementById("downloadButtonbookabc")
//   .addEventListener("click", function () {
//     // Specify the file path
//     var filePath = "copyright.html"; // Change this to your file path
//     openFileInNewTab(filePath);
//   });

// Get the button element
var button = document.getElementById("downloadButtonbookabc");

// Function to change the button size
function changeButtonSize(width, height) {
  button.style.width = width;
  button.style.height = height;
}

// Example: Change button size to 150px width and 50px height
changeButtonSize("30px", "30px");
function changeButtonTextSize(buttonId, textSize) {
  var button = document.getElementById(buttonId);
  button.style.fontSize = textSize;
}

// Example: Change the button text size to 24px
changeButtonTextSize("downloadButtonbookabc", "20px");

function toggleFields(event) {
  event.preventDefault();

  const button = document.getElementById("lite-and-full-version-toogle");
  const isFullVersion = button.innerHTML === "Full Version";

  if (isFullVersion) {
    button.innerHTML = "Lite Version";

    // تمام عناصر کو دکھائیں
    const elements = document.querySelectorAll(".default-hide");
    elements.forEach(function (element) {
      element.style.display = "block";
    });

    const bottomElements = document.querySelectorAll(".hide-bottom-fields");
    bottomElements.forEach(function (element) {
      element.classList.remove("hide-bottom-fields");
      element.classList.add("main-one");
    });
    document.querySelector(".main-hide").style.display = "block";
  } else {
    button.innerHTML = "Full Version";

    // تمام عناصر کو چھپائیں
    const elements = document.querySelectorAll(".default-hide");
    document.querySelector(".main-hide").style.display = "none";
    elements.forEach(function (element) {
      element.style.display = "none";
    });

    const bottomElements = document.querySelectorAll(".hide-bottom-fields");
    bottomElements.forEach(function (element) {
      // element.classList.remove("main-one");
      element.style.display = "none";
    });
  }
}

document
  .getElementById("downloadButtonbookabcd")
  .addEventListener("click", showFields);

// document.querySelectorAll("#piano .piano-m > div").forEach((box) => {
//   alert("HELLO")
//   // box.addEventListener("click", () => {
//   //   // Check if there's a black key (nested div) and get the main text only
//   //   const number = [...box.childNodes].find(node => node.nodeType === Node.TEXT_NODE)?.nodeValue.trim();

//   //   if (number) {
//   //     const checkbox = document.getElementById(`checkbox-${number}`); // Get the checkbox by ID
//   //     if (checkbox) {
//   //       checkbox.checked = !checkbox.checked; // Toggle checkbox selection
//   //     }

//   //     const inputField = document.getElementById("yourSet");
//   //     inputField.value = inputField.value ? inputField.value + ", " + number : number; // Append new number
//   //   }

//   //   console.log("CHECKBOX VALUE:", number);
//   // });
// });

function hello1(number) {
  // Replace 10 with 't' and 11 with 'e' if needed
  if (number === "10") {
    number = "t";
  } else if (number === "11") {
    number = "e";
  }

  // Find the corresponding checkbox
  const checkboxId = `checkbox-${
    number === "t" ? "10" : number === "e" ? "11" : number
  }`;
  const checkbox = document.getElementById(checkboxId);

  if (checkbox) {
    // Toggle the checkbox state
    checkbox.checked = !checkbox.checked;

    // Get the current set of values in the input field
    const inputField = document.getElementById("yourSet");
    let values = inputField.value.split(" ").filter((val) => val);

    if (checkbox.checked) {
      if (!values.includes(number)) {
        // Add the number if checked and not already in the set
        values.push(number);
      }
    } else {
      // Remove the number if unchecked
      values = values.filter((val) => val !== number);
    }

    // Update the input field
    inputField.value = values.join(" ");
  }

  console.log("Updated user set:", document.getElementById("yourSet").value);
}

function switchIns() {
  document.querySelector(".show-guitar").style.display = "block";
  document.querySelector(".piano-main").style.display = "none";

  // Change the button text
  const button = document.querySelector(".switch-to-instrument");
  button.innerText = "Piano"; // Update button text
  button.setAttribute("onclick", "switchBack()"); // Change the onclick function for the new state
}

function switchBack() {
  document.querySelector(".show-guitar").style.display = "none";
  document.querySelector(".piano-main").style.display = "block";

  // Change the button text back
  const button = document.querySelector(".switch-to-instrument");
  button.innerText = "Guitar"; // Reset button text
  button.setAttribute("onclick", "switchIns()"); // Change the onclick function back
}
function resetAll() {
  // Uncheck all checkboxes
  document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.checked = false;
  });

  // Clear all input and textarea values
  document.querySelectorAll("input, textarea").forEach((element) => {
    element.value = "";
  });

  // Remove the 'selected-highlight' class from highlighted elements
  document.querySelectorAll(".selected-highlight").forEach((element) => {
    element.classList.remove("selected-highlight");
  });

  // Clear the selectedValuesSet to avoid retaining old values
  selectedValuesSet.clear();

  // Clear the input field showing selected values
  const inputField = document.querySelector("input[name='yourSet']");
  if (inputField) {
    inputField.value = "";
  }
}
