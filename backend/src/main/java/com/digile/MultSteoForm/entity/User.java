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

	@Override
	public String toString() {
		return "User [id=" + id + ", fullName=" + fullName + ", email=" + email + ", mobile=" + mobile + ", address="
				+ address + ", city=" + city + ", state=" + state + ", username=" + username + ", password=" + password
				+ "]";
	}
	
    

   
}

