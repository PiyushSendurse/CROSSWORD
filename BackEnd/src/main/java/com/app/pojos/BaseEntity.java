package com.app.pojos;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import lombok.Getter;
import lombok.Setter;


//DO NOT create any table for the same !
@MappedSuperclass // to tell hibernate folllowing is a common super class for all other entities n
public class BaseEntity {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;


public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}
}



