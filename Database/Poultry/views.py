from django.shortcuts import render

def Poultry(request):
  return render(request,"select.html")

def password(request):
  return render(request,"password.html")


def main(request):
  return render(request,"main.html")


def batchlog(request):
  return render(request,"batchlog.html")

def inventory(request):
  return render(request,"inventory.html")

def growthlog(request):
  return render(request,"growthlog.html")

def user(request):
  return render(request,"user.html")

