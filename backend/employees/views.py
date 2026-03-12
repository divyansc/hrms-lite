from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Employee, Attendance
from .serializers import EmployeeSerializer, AttendanceSerializer

@api_view(['GET','POST'])
def employees(request):


    if request.method == 'GET':

        employees = Employee.objects.all()
        serializer = EmployeeSerializer(employees, many=True)

        return Response(serializer.data)

    if request.method == 'POST':

        serializer = EmployeeSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=400)


@api_view(['DELETE'])
def delete_employee(request, employee_id):


    try:
        employee = Employee.objects.get(id=employee_id)

    except Employee.DoesNotExist:
        return Response({"error":"Employee not found"}, status=404)

    employee.delete()

    return Response({"message":"Employee deleted"})


@api_view(['POST'])
def mark_attendance(request):
    employee_id = request.data.get('employee')
    date = request.data.get('date')

    # check employee exists
    try:
        employee = Employee.objects.get(id=employee_id)
    except Employee.DoesNotExist:
        return Response({"error": "Employee not found"}, status=status.HTTP_404_NOT_FOUND)

    # check duplicate attendance
    if Attendance.objects.filter(employee=employee, date=date).exists():
        return Response(
            {"error": "Attendance already marked for this date"},
            status=status.HTTP_400_BAD_REQUEST
        )

    serializer = AttendanceSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def attendance_history(request, employee_id):


    records = Attendance.objects.filter(employee_id=employee_id)

    serializer = AttendanceSerializer(records, many=True)

    return Response(serializer.data)

