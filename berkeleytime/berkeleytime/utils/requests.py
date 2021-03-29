from django.http import HttpResponse, Http404
import json

def success_json(options={}):
    options.update({"success": True})
    return render_to_json(options)

def failure_json(error, code=400):
    message = {"success": False, "error": str(error)}
    return HttpResponse(json.dumps(message, default=str), content_type="application/json", status=code)

def get_profile(request):
    return request.user.berkeleytimeuserprofile

def render_to_json(obj):
    return HttpResponse(json.dumps(obj, default=str), content_type="application/json")

def render_to_empty_json():
    return render_to_json({})

def render_to_empty_json_with_status_code(status):
    return HttpResponse(json.dumps({}, default=str), content_type="application/json", status=status)

def render_error_to_json(error):
    return render_to_json({"error": str(error)})

def raise_404_on_error(fn):
    def wrapped(*args, **kwargs):
        try:
            return fn(*args, **kwargs)
        except Exception as e:
            print e
            raise Http404
    return wrapped

def raise_404_if_not_get(fn):
    def wrapped(request, *args, **kwargs):
        if request.method == "GET":
            return fn(request, *args, **kwargs)
        else:
            print "ERROR: View only accepts GET!"
            raise Http404
    return wrapped