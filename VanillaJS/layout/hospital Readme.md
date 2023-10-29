A database schema for a hospital management system typically includes various tables to store information related to patients, doctors, appointments, medical records, and other relevant entities. Here's an example of a simplified database schema for a hospital management system:

1. **Table: Patients**
   - patient_id (Primary Key)
   - first_name
   - last_name
   - date_of_birth
   - gender
   - address
   - contact_number
   - email

2. **Table: Doctors**
   - doctor_id (Primary Key)
   - first_name
   - last_name
   - specialization
   - contact_number
   - email

3. **Table: Appointments**
   - appointment_id (Primary Key)
   - patient_id (Foreign Key referencing Patients.patient_id)
   - doctor_id (Foreign Key referencing Doctors.doctor_id)
   - appointment_date
   - appointment_time
   - status (e.g., scheduled, canceled, completed)

4. **Table: MedicalRecords**
   - record_id (Primary Key)
   - patient_id (Foreign Key referencing Patients.patient_id)
   - doctor_id (Foreign Key referencing Doctors.doctor_id)
   - visit_date
   - diagnosis
   - prescription
   - notes

5. **Table: Departments**
   - department_id (Primary Key)
   - department_name

6. **Table: Employees**
   - employee_id (Primary Key)
   - first_name
   - last_name
   - department_id (Foreign Key referencing Departments.department_id)
   - job_title
   - contact_number
   - email

7. **Table: Payments**
   - payment_id (Primary Key)
   - patient_id (Foreign Key referencing Patients.patient_id)
   - amount
   - payment_date

This is just a basic example, and depending on the specific requirements of your hospital management system, there might be additional tables and relationships to consider. It's important to analyze the system requirements thoroughly to design an appropriate and efficient database schema.

Please note that this schema is a simplified representation and may not include all the necessary fields and relationships required for a fully functional hospital management system.


If you want the "Doctor" entity to reference the "Employee" table in your hospital management system, you can modify the schema as follows:

1. **Table: Employees**
   - employee_id (Primary Key)
   - first_name
   - last_name
   - department_id (Foreign Key referencing Departments.department_id)
   - job_title
   - contact_number
   - email

2. **Table: Doctors**
   - doctor_id (Primary Key)
   - employee_id (Foreign Key referencing Employees.employee_id)
   - specialization

By introducing the "Employees" table and modifying the "Doctors" table accordingly, you establish a relationship between doctors and employees. Each doctor record will reference the corresponding employee record through the "employee_id" foreign key.

Remember to adjust the rest of your schema and application logic accordingly to reflect this change.