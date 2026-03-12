from django.urls import path
from . import views

urlpatterns = [

path('employees/', views.employees),

path('employees/<int:employee_id>/', views.delete_employee),

path('attendance/', views.mark_attendance),

path('attendance/<int:employee_id>/', views.attendance_history),

]
