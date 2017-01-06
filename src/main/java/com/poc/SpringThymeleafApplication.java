package com.poc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;

@ComponentScan("com.poc")
@PropertySources({
	@PropertySource("i18n/messages.properties")
})
@SpringBootApplication
public class SpringThymeleafApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringThymeleafApplication.class, args);
	}
}
