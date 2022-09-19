package com.personal.TargetBetterPrice;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TargetBetterPriceAppApplication {

	private static final Logger log = LoggerFactory.getLogger(TargetBetterPriceAppApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(TargetBetterPriceAppApplication.class, args);
	}

//	@Bean
//	public RestTemplate restTemplate(RestTemplateBuilder builder) {
//		return builder.build();
//	}
//
//	@Bean
//	public CommandLineRunner run(RestTemplate restTemplate) throws Exception {
//		return args -> {
//			int zipCode = 85017;//aquireZIP();
//
//			String storeURI = "https://api.apilayer.com/tax_data/tax_rates?zip=85017&country=US";
//
//			HttpHeaders headers = new HttpHeaders();
//			headers.set("apikey", "48n1QGuhg6DP7ERxniyNs0l1L0ItasrH");
//
//			HttpEntity<Void> requestEntity = new HttpEntity<>(headers);
//			ResponseEntity<String> response = restTemplate.exchange(storeURI, HttpMethod.GET,
//					requestEntity,String.class);
//
//			JsonObject data = new JsonParser().parse(response.getBody()).getAsJsonObject();
//
//			double taxRate = Double.parseDouble(data.get("combined_rate").toString());
//			System.out.println(taxRate);
//
//			System.exit(1);
//		};
//	}


	}
