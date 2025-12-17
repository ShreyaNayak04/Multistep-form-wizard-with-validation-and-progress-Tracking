package com.digile.MultSteoForm.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "MULTISTEP_USER")
@SequenceGenerator(
        name = "userSeq",
        sequenceName = "MULTISTEP_SEQ",
        allocationSize = 1
)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "userSeq")
    @Column(name="ID")
    private Long id;

    @NotBlank(message = "Full name is required")
    @Column(name="FULL_NAME")
    private String fullName;

    @Email
    @NotBlank(message = "Email id is required")
    @Column(name="EMAIL")
    private String email;

    @NotBlank(message = "mobile num is required")
    @Column(name="MOBILE")
    private String mobile;
    
    @Column(name="GENDER")
    private String gender;
    
    @Column(name="DOB")
    private String dob;
    
    @Column(name="ADDRESS")
    private String address;
    @Column(name="CITY")
    private String city;
    @Column(name="STATE")
    private String state;

    @NotBlank(message = "username is required")
    @Column(name="USERNAME")
    private String username;

    @NotBlank(message = "password is required")
    @Column(name="PASSWORD")
    private String password;

    @Column(name="ACCOUNT_TYPE")
    private String accountType;

    @Column(name="NEWSLETTER")
    private Boolean newsletter;

    @Column(name="COMPANY_NAME")
    private String companyName;

    @Column(name="COMPANY_SIZE")
    private String companySize;

    @Column(name="FILE_NAME")
    private String fileName;

    @Column(name="FILE_PATH")
    private String filePath;

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

	public Boolean getNewsletter() {
		return newsletter;
	}

	public void setNewsletter(Boolean newsletter) {
		this.newsletter = newsletter;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getCompanySize() {
		return companySize;
	}

	public void setCompanySize(String companySize) {
		this.companySize = companySize;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", fullName=" + fullName + ", email=" + email + ", mobile=" + mobile 
				+ ", gender=" + gender + ", dob=" + dob + ", address="
				+ address + ", city=" + city + ", state=" + state + ", username=" + username + ", password=" + password
				+ ", accountType=" + accountType + ", newsletter=" + newsletter 
				+ ", companyName=" + companyName + ", companySize=" + companySize
				+ ", fileName=" + fileName + ", filePath=" + filePath + "]";
	}
	
    

   
}

