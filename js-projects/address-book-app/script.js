$(document).ready(function () {
    // --------------------------------------------------------------
    // EVENT FUNCTIONS
    // Add Contact button click event
    $("#addContact").click(function () {
      $("#contactForm").show();
      clearFormFields();
      selectedContactIndex = null;
      $("#search").hide(); // Hide the search bar when adding a contact
      $("#addContact").hide(); // Hide the Add Contact button
      $("#contactInfo").hide(); // Hide the Add Contact button
    });

    // Close Contact Form click event
    $("#closeForm").click(function () {
      $("#search").show();
      $("#addContact").show();
      $("#contactForm").hide();
      $("#contactInfo").hide(); // Hide Contact Info - Profile

    });

    // Cancel Contact Form click event
    $("#cancelForm").click(function () {
      $("#search").show();
      $("#addContact").show();
      $("#contactForm").hide();
      $("#contactInfo").hide(); // Hide Contact Info - Profile

    });

  
    // Save Contact button click event
    $("#saveContact").click(function () {
      saveContact();
      $("#addContact").show(); // Show the Add Contact button
      $("#contactInfo").hide(); // Hide Contact Info - Profile
    });
  

    // Delete Contact button click event
    $(document).on("click", ".deleteContact", function () {
      var contactIndex = $(this).closest("tr").index();
      deleteContact(contactIndex);
    });
  
    // Edit Contact button click event
    $(document).on("click", ".editContact", function () {
      var contactIndex = $(this).closest("tr").index();
      editContact(contactIndex);
      $("#addContact").hide(); // Hide the Add Contact button
      $("#contactInfo").hide(); // Hide Contact Info - Profile
    });

    // Search input keyup event
    $("#searchInput").on("keyup", function () {
      var searchTerm = $(this).val().toLowerCase();
      searchContacts(searchTerm);
    });

    // Contact Cell click event
    /* Here, we retrieve the index of the clicked row using $(this).closest("tr").index(). 
    Then, we retrieve the corresponding contact object from the contactList array using the obtained index. 
    Finally, we pass the contact object to the displayContactInfo function.*/
   $(document).on("click", ".contact-cell", function () {
      var contactIndex = $(this).closest("tr").index();
      var contact = contactList[contactIndex];
      
      displayContactInfo(contact);
    });

    // Close Contact Info - Profile event
    $(document).on("click", "#closeInfo", function () {
      $("#contactInfo").css("display", "none");
      $("#search").show();
      $("#addContact").show();
      $("#contactForm").hide();
    });


    // --------------------------------------------------------------
    // FUNCTIONS
    // Function to save a contact
    function saveContact() {
      var firstName = $("#firstName").val();
      var lastName = $("#lastName").val();
      var phone = $("#phone").val();
      var address = $("#address").val();
  
      if (firstName && lastName && phone && address) {
        var contact = {
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          address: address,
        };
  
        if (selectedContactIndex === null) {
          addContact(contact);
        } else {
          updateContact(contact, selectedContactIndex);
        }
  
        clearFormFields();
        $("#contactForm").hide();
        $("#search").show(); // Show the search bar after saving a contact
        $("#contactInfo").show(); // Show Contact Info - Profile
      }
    }
  
    // Function to add a new contact
    function addContact(contact) {
      contactList.push(contact);
      displayContactList();
    }
  
    // Function to update an existing contact
    function updateContact(contact, index) {
      contactList[index] = contact;
      displayContactList();
    }
  
    // Function to delete a contact
    function deleteContact(index) {
      contactList.splice(index, 1);
      displayContactList();
    }
  
    // Function to edit a contact
    function editContact(index) {
      var contact = contactList[index];
      $("#firstName").val(contact.firstName);
      $("#lastName").val(contact.lastName);
      $("#phone").val(contact.phone);
      $("#address").val(contact.address);
      selectedContactIndex = index;
      $("#contactForm").show();
      $("#search").hide(); // Hide the search bar when editing a contact
      $("#contactInfo").hide(); // Hide Contact Info - Profile
    }

  
    // Function to display a contact
    function displayContact(contact) {
      var contactRow =
        "<tr>" +
        "<td>" + "<button class='contact-cell'>" + contact.firstName + "</button>" + "</td>" +
        "<td>" + "<button class='contact-cell'>" + contact.lastName + "</button>" + "</td>" +
        "<td>" + "<button class='contact-cell'>" + contact.phone + "</button>" + "</td>" +
        "<td>" + "<button class='contact-cell'>" + contact.address + "</button>" + "</td>" +
        "<td>" +
        "<button class='editContact'><span class='material-icons-outlined'>edit</span></button> " +
        "<button class='deleteContact'><span class='material-icons-outlined'>delete</span></button>" +
        "</td>" + 
        "</tr>";
  
      $("#contactList tbody").append(contactRow);
    }


    // Function to display a contactInfo
    function displayContactInfo(contact) {
      $("#contactInfo").empty(); // Clear the existing content

      var contactRow =
        '<a><span id="closeInfo" class="material-icons-outlined">clear<span></a>' +
        '<div id="profile">' +
        '<img src="style/images/user-icon.png" width="100" height="100">' +
        '<h6>' + 'Add Photo' + '</h6>' +
        '<h3>' + contact.firstName + ' ' + contact.lastName + '</h3>' +
        '<hr>' +
        '<ul>' +
        '<li id="listTitle">' + '<strong>' + 'Main Information' + '</strong>' + '</li>' +
        '<li>' + '<strong>' + 'Phone: ' + '</strong>' + contact.phone + '</li>' +
        '<li>' + '<strong>' + 'Address: ' + '</strong>' + contact.address + '</li>' +
        '</ul>' +
        '</br>' +
        '<ul>' +
        '<li id="listTitle">' + '<strong>' + 'Additional Information' + '</strong>' + '</li>' +
        '<li>' + '<strong>' + 'Email: ' + '</strong>' + contact.email + '</li>' +
        '<li>' + '<strong>' + 'Birthday: ' + '</strong>' + contact.birthday + '</li>' +
        '<li>' + '<strong>' + 'Tags: ' + '</strong>' + contact.tag + '</li>' + 
        '<li>' + '<strong>' + 'Note: ' + '</strong>' + contact.note + '</li>' +
        '</ul>' +
        '</div>';
    
      $("#contactInfo").html(contactRow); // Replace the existing content with new contact details

      // Show the contact info section
      $("#contactInfo").show();
      $("#search").show();
      $("#addContact").show();
      $("#contactForm").hide();
    }


  
    // Function to display the contact list
    function displayContactList() {
      $("#contactList tbody").empty();
      for (var i = 0; i < contactList.length; i++){
        displayContact(contactList[i]);
      }
    }
  
    // Function to search contacts
    function searchContacts(searchTerm) {
      $("#contactList tbody tr").each(function () {
        var firstName = $(this).find("td:nth-child(1)").text().toLowerCase();
        var lastName = $(this).find("td:nth-child(2)").text().toLowerCase();
        var phone = $(this).find("td:nth-child(3)").text().toLowerCase();
        var address = $(this).find("td:nth-child(4)").text().toLowerCase();
  
        if (
          firstName.indexOf(searchTerm) === -1 &&
          lastName.indexOf(searchTerm) === -1 &&
          phone.indexOf(searchTerm) === -1 &&
          address.indexOf(searchTerm) === -1
        ) {
          $(this).hide();
        } else {
          $(this).show();
        }
      });
    }
  
    // Function to clear the form fields
    function clearFormFields() {
      $("#firstName").val("");
      $("#lastName").val("");
      $("#phone").val("");
      $("#address").val("");
    }


    // --------------------------------------------------------------
    // Initialize the contact list
    var contactList = [];
    var selectedContactIndex = null;
  
    // Sample contacts 
    contactList.push({
      firstName: "Andreas",
      lastName: "Stolz",
      phone: "+49 8563249011",
      address: "Oranienstraße 34, 10999 Berlin",
      email: "andreas.stolz@gmail.com",
      birthday: "February 24th, 1985",
      tag: "Work",
      note: "IT Engineer",
    });
    contactList.push({
      firstName: "Lea",
      lastName: "Meier",
      phone: "+49 5564912376",
      address: "Weydingerstraße 18, 10178 Berlin",
      email: "lea.meier@gmail.com",
      birthday: "April 13th, 1991",
      tag: "Work",
      note: "Graphic Designer",
    });
    contactList.push({
      firstName: "Lorenz",
      lastName: "Stroll",
      phone: "+49 7749851234",
      address: "Lenaustraße 27, 12047 Berlin",
      email: "lorenz.stroll@gmail.com",
      birthday: "January 8th, 1990",
      tag: "School",
      note: "Musician",
    });
    contactList.push({
      firstName: "Matthias",
      lastName: "Holz",
      phone: "+49 4566112399",
      address: "Zeughofstraße 50, 10997 Berlin",
      email: "matthias.holz@gmail.com",
      birthday: "March 3rd, 1984",
      tag: "House",
      note: "Landlord",
    });
    contactList.push({
      firstName: "Margarette",
      lastName: "Müller",
      phone: "+49 9876543210",
      address: "Marchlewskistraße 49, 10243 Berlin",
      email: "margarette.mueller@gmail.com",
      birthday: "December 5th, 1993",
      tag: "School",
      note: "Veterinarian",
    });
    contactList.push({
      firstName: "Ramona",
      lastName: "Fritz",
      phone: "+49 4330087853",
      address: "Köpenicker Ch 46, 10317 Berlin",
      email: "ramona.fritz@gmail.com",
      birthday: "November 17th, 1985",
      tag: "Work",
      note: "Project Manager",
    });
    contactList.push({
      firstName: "Sabrina",
      lastName: "Adams",
      phone: "+49 1227659804",
      address: "Tauentzienstraße 24, 10789 Berlin",
      email: "sabrina.adams@gmail.com",
      birthday: "September 7th, 1993",
      tag: "Family",
      note: "The best sister ever!",
    });
    contactList.push({
      firstName: "Tobias",
      lastName: "Stein",
      phone: "+49 1234567890",
      address: "Warschauerstraße 34, 10243 Berlin",
      email: "tobias.stein@gmail.com",
      birthday: "August 2nd, 1988",
      tag: "School",
      note: "Gardener",
    });
  
    // Display the contact list
    displayContactList();
  });
  
  
  
  
  
  
  