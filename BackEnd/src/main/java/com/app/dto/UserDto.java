package com.app.dto;



import com.app.pojos.Role;

public class UserDto {
	
	private String firstName;

	private String lastName;

	private Role userRole;

	private String email;

	private String password;

	private String mobNo;
	
	private String address;

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Role getUserRole() {
		return userRole;
	}

	public void setUserRole(Role userRole) {
		this.userRole = userRole;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhoneNumber() {
		return mobNo;
	}

	public void setPhoneNumber(String mobNo) {
		this.mobNo = mobNo;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "UserDto [firstName=" + firstName + ", lastName=" + lastName + ", userRole=" + userRole + ", email="
				+ email + ", password=" + password + ", mobNo=" + mobNo + ", address=" + address + "]";
	}
	public UserDto()
	{
		
	}
	
	public UserDto(String firstName, String lastName, Role userRole, String email, String password, String mobNo,
			String address) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.userRole = userRole;
		this.email = email;
		this.password = password;
		this.mobNo = mobNo;
		this.address = address;
	}

	
}
