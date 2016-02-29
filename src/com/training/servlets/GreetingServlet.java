package com.training.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class GreetingServlet
 */
public class GreetingServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	Logger log = Logger.getLogger(this.getClass().getName(), null);

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public GreetingServlet() {
		super();
		log.info("\n\n\t\t====constructor called=====\n\n");
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		log.info("\n\nvendor request info : " + request.getClass().toString());
		log.info("\n\nvendor responce info : " + response.getClass().toString());
		PrintWriter out = response.getWriter();
		response.setContentType("text/html");
		String user = request.getParameter("userName");
		String pword = request.getParameter("passWord");
		String role = request.getParameter("role");
		out.println("Welcome "+ role+" "+user);
		
		out.println("<h1 style='text-align:center'>Welcome to servlet example</h1>");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
