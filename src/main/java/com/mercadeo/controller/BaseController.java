package com.mercadeo.controller;

import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class BaseController {

	private static final String VIEW_INDEX = "index";
	private final static org.slf4j.Logger logger = LoggerFactory.getLogger(BaseController.class);

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String welcome(ModelMap model) {
		logger.info("Se carga vista principal");
		// Spring uses InternalResourceViewResolver and return back index.jsp
		return VIEW_INDEX;

	}
	
	@RequestMapping(value = "/productos", method = RequestMethod.GET)
	public String produts(ModelMap model) {
		logger.info("Se carga vista de productos");
		return "productos";
	}
	
	@RequestMapping(value = "/promociones", method = RequestMethod.GET)
	public String promociones(ModelMap model) {
		logger.info("Se carga vista de promociones");
		return "promociones";
	}
}
