from selenium import webdriver
from selenium.webdriver.common.keys import Keys

from selenium import webdriver

browser = webdriver.Chrome("C:/Users/SONY/Documents/Escritorio/chromedriver")
try:
	browser.get('https://www.bienestarazteca.com/')
except:
	print("hola")