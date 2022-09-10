package com.personal.TargetBetterPrice;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class TargetBetterPriceAppApplication {

	private static final Logger log = LoggerFactory.getLogger(TargetBetterPriceAppApplication.class);

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
			ApiKeys apiKey = new ApiKeys();
			System.out.println(apiKey.getRapidAPI());
			int TCIN = 79500633;//aquireTCIN();
			int zipCode = 85017;//aquireZIP();
			int radius = 3;

			System.out.println();
			String storeURI = "https://4ba751f1-9947-47b0-b376-3fd9d1632b98.mock.pstmn.io";
			// Actual Api works, setting to test Server for now to save server calls
			//"https://target-com-store-product-reviews-locations-data.p.rapidapi.com/location/search?zip="+zipCode+"&radius=3";
			HttpHeaders headers = new HttpHeaders();
			headers.set("X-RapidAPI-Key", apiKey.getRapidAPI());
			headers.set("X-RapidAPI-Host","target-com-store-product-reviews-locations-data.p.rapidapi.com");

			HttpEntity<Void> requestEntity = new HttpEntity<>(headers);
			ResponseEntity<String> response2 = restTemplate.exchange(storeURI, HttpMethod.GET,
					requestEntity,String.class);
			Stores store = new Stores(response2.getBody());
			System.out.println("ZIP: " + store.getZipCode());
			System.out.println("Store ID: "+ store.getStoreID());
			System.out.println("Distance: "+ store.getDistance() + " miles");



			System.exit(1);
		};
	}


//	private int aquireZIP() {
//		int zipCode=0;
//		Scanner scan = new Scanner(System.in);
//		while(zipCode == 0)
//		{
//			System.out.print("Please enter the location's ZIP code: ");
//			if(scan.hasNextInt()) {
//				zipCode = scan.nextInt();
//				if(zipCode>99999 || String.valueOf(zipCode).length() != 5)
//				{
//					System.out.println("*** Please enter a valid 5-digit ZIP Code ***");
//					zipCode=0;
//				}
//			}else
//			{
//				System.out.println("*** Please enter a valid 5-digit ZIP Code ***");
//			}
//			scan.nextLine();
//		}
//		return zipCode;
//	}
//
//	private int aquireTCIN() {
//
//		int TCIN = 0;
//		boolean isNum= false;
//		Scanner scan = new Scanner(System.in);
//		System.out.println();
//		while(!isNum)
//		{
//			System.out.print("Please enter the TCIN number: ");
//			if(scan.hasNextInt()) {
//				TCIN = scan.nextInt();
//				if(String.valueOf(TCIN).length() != 8)
//				{
//					System.out.println("*** Please enter a valid 8-digit TCIN ***");
//					scan.nextLine();
//					continue;
//				}
//			}else
//			{
//				System.out.println("*** Please enter a valid 8-digit TCIN ***");
//				scan.nextLine();
//				continue;
//			}
//			scan.nextLine();
//			isNum = true;
//		}
//		System.out.println();
//
//		return TCIN;
//	}

}
