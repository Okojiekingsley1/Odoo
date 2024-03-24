// from flask import Flask, render_template, request, redirect
// import sqlite3


let popup = document.getElementById("popup");
                        let closeButton = document.getElementById("closePopup");
        
                        function openPopup() {
                                popup.classList.add("open-popup");
                        }
        
                        function closePopup() {
                                popup.classList.remove("open-popup");
                        }
        
                        // Function to be executed when Submit button is clicked
                        function submitAction() {
                                openPopup(); // Open the popup
                                setTimeout(topFunction, 1000); // Scroll to the top after a delay of 1 second
                        }



















app = Flask(__name__)

# Function to add client information to the database
def add_client_to_database(full_name, email, phone_number, date, gender, address, address2, country, city, region, service):
    conn = sqlite3.connect('clients.db')
    c = conn.cursor()
    c.execute('INSERT INTO clients (full_name, email, phone_number, date, gender, address, address2, country, city, region, service) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
              (full_name, email, phone_number, date, gender, address, address2, country, city, region, service))
    conn.commit()
    conn.close()

# Route to handle form submission
@app.route('/submit', methods=['POST'])
def submit():
    full_name = request.form['fullName']
    email = request.form['email']
    phone_number = request.form['phoneNumber']
    date = request.form['date']
    gender = request.form['gender']
    address = request.form['address']
    address2 = request.form['address2']
    country = request.form['country']
    city = request.form['city']
    region = request.form['region']
    service = request.form['service']

    add_client_to_database(full_name, email, phone_number, date, gender, address, address2, country, city, region, service)
    // Redirect to a thank you page or the owner's dashboard
    return redirect('/thank-you')

if __name__ == '__main__':
    app.run(debug=True)