package com.personal.TargetBetterPrice;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class TargetBetterPriceAppApplication {

	//private static final Logger log = LoggerFactory.getLogger(TargetBetterPriceAppApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(TargetBetterPriceAppApplication.class, args);
	}

	@Bean
	public RestTemplate restTemplate(RestTemplateBuilder builder) {
		return builder.build();
	}

	@Bean
	public CommandLineRunner run(RestTemplate restTemplate) throws Exception {
		return args -> {

		};
	}


	}
